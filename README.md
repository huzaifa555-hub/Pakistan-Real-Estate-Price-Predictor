The **Real Estate Rental Price Prediction System** is an end-to-end Machine Learning solution engineered to estimate residential rental rates across major Pakistani urban centers (Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad).

In-market listings scraped from Zameen.com undergo regex-based price normalization, geospatial keyword parsing, amenities signal mining, non-linear outlier bounds filtering, and categorical One-Hot Encoding. The feature matrix feeds into an **Extreme Gradient Boosting (XGBoost) Regressor**. The pipeline is serialized into binary artifacts and served via a **Flask RESTful API**, delivering real-time inferences to a **Next.js** TypeScript dashboard styled with Tailwind CSS.

---

## 🎓 Academic Administration & Development Team

### **Academic Entity**
* **Department:** Institute of Mathematics and Computer Science (IMCS)
* **University:** University of Sindh, Jamshoro, Sindh, Pakistan
* **Program:** Bachelor of Science in Computer Science / Software Engineering
* **Batch:** 2K23

### **Supervision**
* **Prof. Dr. Imtiaz Korejo**  
  *Professor & FYP Supervisor*  
  *Institute of Mathematics and Computer Science (IMCS), University of Sindh, Jamshoro*

### **Development Roster**
| Student Name | Roll Number | Primary Contributions |
| :--- | :--- | :--- |
| **Hafiz Huzaifa** | `2K23/CSE/54` | **Group Leader** — Architecture, Model Pipeline, Backend API & System Integration |
| **Satiyam** | `2K23/CSE/131` | Data Preprocessing, Regex Standardization & Feature Engineering |
| **Lukus** | `2K23/CSE/72` | Frontend UI/UX Engineering, Dashboard Integration & Documentation |

---

## 🏛 System Architecture & Execution Pipeline

The application adheres to a modular three-tier architecture separating data transformation, backend orchestration, and user client interaction.

+-----------------------------------------------------------------------------------+
|                                 1. DATA ENGINE                                    |
|  [zameen_rentals_data.csv] ---> Regex Parsing & Imputation ---> Outlier Scrubbing  |
|                                                                 |                 |
|                                                                 v                 |
|  [model.pkl] <--- Serialization <--- Model Training <--- Feature Matrix (X, y)   |
|  [feature_columns.pkl]                                                            |
+-----------------------------------------------------------------------------------+
|
v
+-----------------------------------------------------------------------------------+
|                               2. BACKEND API SERVICE                              |
|  Flask Application (app.py) running on http://127.0.0.1:5000                      |
|  - CORS Middleware Routing                                                        |
|  - Reindexing Guard for Categorical Encodings                                     |
|  - Inference Dispatcher                                                           |
+-----------------------------------------------------------------------------------+
^
| HTTP POST (JSON Payload)
v
+-----------------------------------------------------------------------------------+
|                               3. FRONTEND CLIENT UI                               |
|  Next.js 14 App Router running on http://localhost:3000                           |
|  - Input Validation Controls (City, Size, Amenities)                              |
|  - Asynchronous Valuation Renderer                                                |
+-----------------------------------------------------------------------------------+

---

## 🛠 Tech Stack Specifications

* **Language Engines:** Python `v3.14.0` (Virtual Environment via `venv`), Node.js `v20.x`
* **Data & Analytics Engine:** `pandas` (`v3.0.5`), `numpy` (`v2.5.2`)
* **Machine Learning Framework:** `scikit-learn` (`v1.9.0`), `xgboost` (`v3.4.1`)
* **Backend Framework:** `flask` (`v3.1.3`), `flask-cors` (`v6.0.5`), `pickle` (StdLib)
* **Frontend Application:** Next.js (App Router), TypeScript (`.tsx`), Tailwind CSS

---

## 📁 Repository Structure

```text
Real Estate Price Prediction System Using ML/
├── data/
│   └── zameen_rentals_data.csv       # Raw listing dataset (Source: Zameen.com)
├── backend/
│   ├── venv/                         # Isolated Python Virtual Environment
│   ├── check_env.py                  # Environment sanity checker
│   ├── train_model.py                # Preprocessing, feature extraction & training script
│   ├── app.py                        # Flask RESTful API server entry point
│   ├── model.pkl                     # Trained binary XGBoost model object
│   └── feature_columns.pkl           # Column header schema snapshot
├── frontend/                         # Next.js web application root
│   ├── app/
│   │   ├── page.tsx                  # Interactive prediction form UI
│   │   ├── layout.tsx                # Base HTML wrapper
│   │   └── globals.css               # Tailwind directives
│   ├── package.json                  # Node dependencies and scripts
│   ├── tsconfig.json                 # TypeScript strict compiler rules
│   └── tailwind.config.js            # Tailwind layout parameters
├── .gitignore                        # Git exclusion rules
└── README.md                         # Technical documentation

📜 Project Metadata & Usage Policy
Department: Institute of Mathematics and Computer Science (IMCS)

Institution: University of Sindh, Jamshoro

Term: Final Year Project (FYP) 2026

Data Source: Zameen.com Listings Dataset

License: Open Academic License (Restricted to Educational & Evaluation Purposes)