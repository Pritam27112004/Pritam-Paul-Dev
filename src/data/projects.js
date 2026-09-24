export const projects = [
  {
    year: 2026,
    title: "Interstellar – Hostel Booking Platform",
    description:
      "A platform connecting hostel owners with prospective tenants, enabling owners to list properties while users browse, search, and review listings. Built using the MVC architecture with authentication and authorization handled via Passport.js, Express sessions, and cookie-based session management. Designed RESTful APIs to handle CRUD operations for listings and reviews, with centralized error handling and Cloudinary integration for cloud-based image storage. Developed a responsive, dynamic front end using EJS templating with Bootstrap for consistent styling across devices.",
    technologies: "JavaScript, Node.js, Express.js, MongoDB, HTML, CSS, EJS, Bootstrap, Cloudinary.",
    link: "https://intersteller-rowo.onrender.com/",
  },
  {
    year: 2026,
    title: "Retail Data Engineering and Analytics Platform — Databricks",
    description:
      "Developed an end-to-end retail data analytics pipeline on Databricks, ingesting data from Salesforce CRM, Azure Blob Storage, and PostgreSQL via Lakeflow Connect. Implemented a Bronze–Silver–Gold Medallion Architecture using Lakeflow Spark Declarative Pipelines for ETL, and designed a Gold-layer Star Schema to support analytical reporting. Built interactive Databricks SQL dashboards for retail sales and customer insights, and orchestrated the entire workflow using Databricks Jobs.",
    technologies: "Databricks, Lakeflow Connect, Lakeflow Spark Declarative Pipelines, Medallion Architecture, Star Schema, Databricks Jobs.",
    link: "https://github.com/Pritam27112004/Retail-Data-Engineering-Analytics-Platform---Databricks",
  },
  {
    year: 2026,
    title: "Explainable AI System for PCOS/PCOD Risk Prediction (Opensource Contribution at GSSoC)",
    description:
      "An machine learning system for predicting Polycystic Ovary Syndrome (PCOS) risk using an ensemble of XGBoost, LightGBM, and a Deep Neural Network, achieving a robust F1-score of 0.8889. Engineered the preprocessing pipeline with median-based missing value imputation and applied Firefly Optimization for feature selection. Integrated SHAP and DiCE to deliver transparent, feature-level interpretability. Highlighted key drivers such as Follicle No. (R) and generated actionable, patient-specific counterfactual suggestions for risk mitigation.",
    technologies: "Python, Pandas, NumPy, Scikit-learn, TensorFlow, SHAP, DiCE-ML, Matplotlib.",
    link: "https://colab.research.google.com/drive/1If49AiCrEDb6-B_ugeLQW6byTtUGEyb7?usp=sharing",
  },
  {
    year: 2026,
    title: "CYCRAI2027 - A Conference Website",
    description:
      "Developed the official conference website for the Department of Cyber Security for an IEEE-proposed conference scheduled for 2027.",
    technologies: "React.js, tailwind",
    link: "https://cycrai.uem.edu.in/"
  },
];