import os
import pickle
import re
import pandas as pd
from sklearn.metrics import mean_absolute_error, r2_score
from sklearn.model_selection import train_test_split
from xgboost import XGBRegressor


def parse_price(price_str):
    if pd.isna(price_str):
        return None
    price_str = str(price_str).lower().strip()
    match = re.search(r"([\d\.]+)", price_str)
    if not match:
        return None

    val = float(match.group(1))
    if "crore" in price_str:
        return int(val * 10_000_000)
    elif "lakh" in price_str:
        return int(val * 100_000)
    elif "thousand" in price_str or "k" in price_str:
        return int(val * 1_000)
    else:
        return int(val)


def extract_city(loc_str):
    if pd.isna(loc_str):
        return "Other"
    known_cities = ["Lahore", "Karachi", "Islamabad", "Rawalpindi", "Peshawar", "Faisalabad"]
    for city in known_cities:
        if city.lower() in str(loc_str).lower():
            return city
    return "Other"


def main():
    csv_path = os.path.join("..", "data", "zameen_rentals_data.csv")
    print(f"Loading dataset from {csv_path}...")
    df = pd.read_csv(csv_path)

    # 1. Clean Column Names
    df.columns = df.columns.str.strip().str.lower()
    print(f"Detected CSV Columns: {df.columns.tolist()}")

    # 2. Identify target and feature columns
    price_col = "price" if "price" in df.columns else "rent"
    loc_col = "location" if "location" in df.columns else "locality"
    size_col = "marla" if "marla" in df.columns else "marla_size"

    print(f"Using columns -> Price: '{price_col}', Location: '{loc_col}', Size: '{size_col}'")

    # 3. Feature Processing
    df["price_pkr"] = df[price_col].apply(parse_price)
    df["city"] = df[loc_col].apply(extract_city)

    details_col = "details" if "details" in df.columns else df.columns[0]
    df["details_clean"] = df[details_col].fillna("").astype(str).str.lower()

    df["is_furnished"] = df["details_clean"].apply(
        lambda x: 1 if "furnished" in x and "unfurnished" not in x else 0
    )
    df["is_apartment"] = df["details_clean"].apply(
        lambda x: 1 if "apartment" in x or "flat" in x else 0
    )

    # 4. Enforce Numeric Conversion for XGBoost
    df["bedrooms"] = pd.to_numeric(df["bedrooms"], errors="coerce")
    df["washrooms"] = pd.to_numeric(df["washrooms"], errors="coerce")
    df["marla_size"] = pd.to_numeric(df[size_col], errors="coerce")

    # Clean missing values & outliers
    df = df.dropna(subset=["price_pkr", "bedrooms", "washrooms", "marla_size"])

    df = df[(df["price_pkr"] >= 5000) & (df["price_pkr"] <= 2000000)]
    df = df[(df["marla_size"] > 0) & (df["marla_size"] <= 50)]

    features = ["city", "bedrooms", "washrooms", "marla_size", "is_furnished", "is_apartment"]
    X = pd.get_dummies(df[features], columns=["city"], drop_first=False)
    
    # Ensure all One-Hot encoded columns are numeric int/float
    X = X.astype(float)
    y = df["price_pkr"].astype(float)

    feature_columns = X.columns.tolist()

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    print("Training XGBoost Model...")
    model = XGBRegressor(n_estimators=100, learning_rate=0.1, max_depth=6, random_state=42)
    model.fit(X_train, y_train)

    predictions = model.predict(X_test)
    print(f"Model R² Score: {r2_score(y_test, predictions):.2f}")
    print(f"MAE: PKR {mean_absolute_error(y_test, predictions):,.0f}")

    with open("model.pkl", "wb") as f:
        pickle.dump(model, f)

    with open("feature_columns.pkl", "wb") as f:
        pickle.dump(feature_columns, f)

    print("DONE! Created model.pkl and feature_columns.pkl successfully.")


if __name__ == "__main__":
    main()