import pickle
from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enables cross-origin requests from Next.js

# Load ML artifacts
with open("model.pkl", "rb") as f:
    model = pickle.load(f)

with open("feature_columns.pkl", "rb") as f:
    feature_columns = pickle.load(f)


@app.route("/api/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()

        raw_input = {
            "city": data.get("city", "Lahore"),
            "bedrooms": float(data.get("bedrooms", 3)),
            "washrooms": float(data.get("washrooms", 3)),
            "marla_size": float(data.get("marla_size", 5)),
            "is_furnished": int(data.get("is_furnished", 0)),
            "is_apartment": int(data.get("is_apartment", 0)),
        }

        input_df = pd.DataFrame([raw_input])
        input_df = pd.get_dummies(input_df, columns=["city"])
        
        # Align input columns with training dataset feature structure
        input_df = input_df.reindex(columns=feature_columns, fill_value=0).astype(float)

        predicted_rent = model.predict(input_df)[0]
        rent_val = max(0, round(float(predicted_rent)))

        return jsonify(
            {
                "success": True,
                "predicted_rent_pkr": rent_val,
                "formatted_rent": f"PKR {rent_val:,}",
            }
        )

    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 400


if __name__ == "__main__":
    print("Flask server running on http://127.0.0.1:5000")
    app.run(debug=True, port=5000)