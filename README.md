<div align="center">

# 🏡 Pakistan Real Estate Price Prediction System

An end-to-end Machine Learning ecosystem engineered to evaluate and predict residential rental prices across major metropolitan cities in Pakistan using XGBoost, Flask, and Next.js.

[![Python](https://img.shields.io/badge/Python-3.14-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![XGBoost](https://img.shields.io/badge/XGBoost-v3.4-EC2227?style=for-the-badge&logo=xgboost&logoColor=white)](https://xgboost.ai)
[![Flask](https://img.shields.io/badge/Flask-v3.1-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com)
[![Next.js](https://img.shields.io/badge/Next.js-v14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

---

### 🎓 Academic Capstone Project (FYP)
**Institute of Mathematics and Computer Science (IMCS)**  
**University of Sindh, Jamshoro**

</div>

---

## 📌 Executive Summary

Real estate markets across Pakistan suffer from severe information asymmetry, inconsistent valuation metrics, and broker manipulation. This project solves that problem by building a data-driven valuation engine.

By processing raw market listings scraped from Zameen.com, the pipeline cleans currency strings, parses physical parameters, applies non-linear outlier bounds, and trains an **XGBoost Regressor** model. The model serves real-time predictions via a **Flask RESTful API** to an interactive **Next.js** web interface.

---

## 👥 Academic Supervision & Team

### **Project Supervisor**
* **Prof. Dr. Imtiaz Korejo**  
  *Professor & FYP Supervisor*  
  *Institute of Mathematics and Computer Science (IMCS), University of Sindh, Jamshoro*

### **Development Team**
| Student Name | Roll Number | Primary Core Responsibilities |
| :--- | :--- | :--- |
| **Hafiz Huzaifa** | `2K23/CSE/54` | **Team Lead** — System Architecture, ML Pipeline, Backend REST API & Integration |
| **Satiyam** | `2K23/CSE/131` | Data Engineering, Regex Normalization & Feature Pipeline |
| **Lukus** | `2K23/CSE/72` | UI/UX Development, Next.js Dashboard & Documentation |

---

## ⚡ System Architecture

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                           1. DATA PIPELINE                              │
│  Zameen Dataset ➔ Regex Price Normalization ➔ Spatial Keyword Extraction │
│  ➔ Outlier Sanitization ➔ One-Hot Matrix Encoding ➔ Train XGBoost       │
└──────────────────────────────────┬──────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                       2. BACKEND API SERVICE                            │
│  Flask REST API ([http://127.0.0.1:5000](http://127.0.0.1:5000))                                 │
│  - Endpoint: POST /api/predict                                          │
│  - Feature Reindexing Guard (feature_columns.pkl)                       │
│  - Real-time Model Inference (model.pkl)                                │
└──────────────────────────────────▲──────────────────────────────────────┘
                                   │
                                   │ JSON Payload
                                   ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         3. FRONTEND DASHBOARD                           │
│  Next.js + TypeScript + Tailwind CSS Interface                          │
│  - Input Parameters: City, Size (Marla), Beds, Baths, Furnishing        │
│  - Real-time Price Estimation UI Component                              │
└─────────────────────────────────────────────────────────────────────────┘


🛠 Tech Stack

ML & Analytics: Python 3.14, pandas, numpy, scikit-learn, xgboost

Backend API: Flask, flask-cors, pickle

Frontend UI: Next.js (App Router), TypeScript, Tailwind CSS, Lucide React

Environment & Tools: pnpm, venv, Git, VS Code

📁 Project Structure

├── data/
│   └── zameen_rentals_data.csv       # Raw listing dataset
├── backend/
│   ├── venv/                         # Python Virtual Environment
│   ├── train_model.py                # Data processing & model training script
│   ├── app.py                        # Flask API server
│   ├── model.pkl                     # Saved XGBoost model artifact
│   └── feature_columns.pkl           # Saved feature matrix schema
├── frontend/                         # Next.js Application Root
│   ├── app/                          # Next.js App Router
│   ├── package.json                  # Node dependencies
│   └── tailwind.config.js            # Tailwind configuration
├── .gitignore                        # Git exclusion rules
└── README.md                         # Project documentation

