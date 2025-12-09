# Bank Marketing Prediction Project

This Jupyter notebook (`notebook_ Tim_A25-CS069.ipynb`) analyzes the Bank Marketing dataset to predict whether a customer will subscribe to a term deposit. The project covers data exploration, preprocessing, handling imbalanced data, and training multiple machine learning models.

## Dataset
- **Source**: Bank Additional Full dataset from UCI Machine Learning Repository.
- **Description**: Contains information about bank clients and their responses to marketing campaigns.
- **Target Variable**: `y` (yes/no for subscription).
- **Access Files Pickle**: [Google Drive Folder](https://drive.google.com/drive/folders/17gk7ldNMe2kI7uEILhb_wzk4APVQ3nFV?usp=sharing)

## Key Steps
1. **Exploratory Data Analysis (EDA)**: Univariate and bivariate analysis, correlation heatmap, categorical distributions.
2. **Data Preprocessing**: Handle outliers, duplicates, missing values, feature engineering (e.g., pdays), encoding (frequency, label, ordinal, one-hot), scaling.
3. **Handling Imbalanced Data**: Manual SMOTE implementation for oversampling the minority class.
4. **Baseline Model**: Logistic Regression with SMOTE.
5. **Model Exploration**: Random Forest with SMOTE.
6. **Hyperparameter Tuning**: Using Optuna for XGBoost (with class weights), KNN (with SMOTE), Decision Tree (with class weights), and Random Forest (with class weights).
7. **Model Evaluation**: Compare accuracy, recall, precision, confusion matrices.
8. **Feature Importance**: Analyze top features from XGBoost.
9. **Model Saving**: Save best model (XGBoost) and preprocessing pipeline.
10. **Prediction**: Load model and predict probabilities on the full dataset.

## Models Used
- Logistic Regression
- Random Forest
- XGBoost
- K-Nearest Neighbors (KNN)
- Decision Tree

## Results
- XGBoost with Optuna tuning achieved the best performance in terms of recall and overall metrics.
- Evaluation metrics include accuracy, recall, precision, and confusion matrices for each model.

## Files
- `notebook_ Tim_A25-CS069.ipynb`: Main notebook with all code and analysis.
- `best_model.pkl`: Saved XGBoost model.
- `preprocessing_pipeline.pkl`: Saved preprocessing pipeline.
- `probabilitas.csv`: Predictions with probabilities for the full dataset.
- `probabilitas_y1.csv`: Predictions for positive class only.


## How to Run
1. Ensure Python environment with required libraries (pandas, numpy, scikit-learn, xgboost, optuna, etc.).
2. Open the notebook in Jupyter or VS Code.
3. Run cells sequentially.
4. For predictions, load the saved model and pipeline as shown in the notebook.

## Dependencies
- pandas
- numpy
- matplotlib
- seaborn
- scikit-learn
- xgboost
- optuna
- joblib
- pickle
