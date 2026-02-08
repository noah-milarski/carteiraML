// Real data from ML pipeline CSV outputs
// Source: model_comparison.csv, LogisticRegression_coefficients.csv, LogisticRegression_predictions.csv

// ============================================================================
// MODEL COMPARISON (from model_comparison.csv)
// ============================================================================

export const modelComparison = [
  {
    model: "LogisticRegression",
    valAuc: 0.8509,
    valAucStd: 0.0517,
    trainAuc: 0.8779,
    precision: 0.7899,
    recall: 0.74,
    f1: 0.7563,
    gap: 0.027,
    status: "best" as const,
  },
  {
    model: "RandomForest",
    valAuc: 0.8373,
    valAucStd: 0.0815,
    trainAuc: 0.9902,
    precision: 0.7178,
    recall: 0.8067,
    f1: 0.7585,
    gap: 0.153,
    status: "overfit" as const,
  },
  {
    model: "LightGBM",
    valAuc: 0.821,
    valAucStd: 0.0739,
    trainAuc: 0.9923,
    precision: 0.7351,
    recall: 0.7622,
    f1: 0.7463,
    gap: 0.1713,
    status: "overfit" as const,
  },
]

// ============================================================================
// FEATURE IMPORTANCE (from LogisticRegression_coefficients.csv)
// ============================================================================

export const featureImportance = [
  { feature: "price_to_52w_low", coefficient: 0.3571 },
  { feature: "price_to_52w_high", coefficient: 0.3054 },
  { feature: "current_ratio", coefficient: 0.2661 },
  { feature: "52w_change", coefficient: 0.0522 },
  { feature: "roe", coefficient: 0.0399 },
  { feature: "net_debt_to_equity", coefficient: 0.0 },
  { feature: "price_trend_6m", coefficient: 0.0 },
  { feature: "roe_avg_4q", coefficient: 0.0 },
  { feature: "earnings_per_share", coefficient: 0.0 },
  { feature: "quick_ratio", coefficient: 0.0 },
  { feature: "roa", coefficient: 0.0 },
  { feature: "pb_ratio", coefficient: 0.0 },
  { feature: "net_debt", coefficient: 0.0 },
  { feature: "volume_trend_63d", coefficient: 0.0 },
  { feature: "revenue_per_share", coefficient: 0.0 },
  { feature: "total_cash_per_share", coefficient: 0.0 },
  { feature: "book_value_per_share", coefficient: 0.0 },
  { feature: "working_capital", coefficient: 0.0 },
]

// ============================================================================
// PREDICTIONS (from LogisticRegression_predictions.csv)
// ============================================================================

export const predictions = [
  { symbol: "TKNO4", target: 1, proba: 0.8437, predicted: 1, correct: true },
  { symbol: "AURA33", target: 1, proba: 0.7956, predicted: 1, correct: true },
  { symbol: "CEBR5", target: 1, proba: 0.7920, predicted: 1, correct: true },
  { symbol: "CEBR3", target: 1, proba: 0.7826, predicted: 1, correct: true },
  { symbol: "CEBR6", target: 1, proba: 0.7817, predicted: 1, correct: true },
  { symbol: "MOVI3", target: 1, proba: 0.7725, predicted: 1, correct: true },
  { symbol: "PINE4", target: 1, proba: 0.7531, predicted: 1, correct: true },
  { symbol: "JHSF3", target: 1, proba: 0.7250, predicted: 1, correct: true },
  { symbol: "MDNE3", target: 1, proba: 0.7108, predicted: 1, correct: true },
  { symbol: "SEER3", target: 0, proba: 0.7044, predicted: 1, correct: false },
  { symbol: "ANIM3", target: 1, proba: 0.6905, predicted: 1, correct: true },
  { symbol: "CSMG3", target: 1, proba: 0.6845, predicted: 1, correct: true },
  { symbol: "HBSA3", target: 1, proba: 0.6822, predicted: 1, correct: true },
  { symbol: "COGN3", target: 1, proba: 0.6684, predicted: 1, correct: true },
  { symbol: "PTNT4", target: 0, proba: 0.6618, predicted: 1, correct: false },
  { symbol: "LAVV3", target: 1, proba: 0.6560, predicted: 1, correct: true },
  { symbol: "CTKA4", target: 1, proba: 0.6569, predicted: 1, correct: true },
  { symbol: "MTSA4", target: 1, proba: 0.6569, predicted: 1, correct: true },
  { symbol: "ITUB4", target: 1, proba: 0.6458, predicted: 1, correct: true },
  { symbol: "VIVA3", target: 1, proba: 0.6394, predicted: 1, correct: true },
  { symbol: "ISAE4", target: 1, proba: 0.6353, predicted: 1, correct: true },
  { symbol: "VBBR3", target: 1, proba: 0.6219, predicted: 1, correct: true },
  { symbol: "TECN3", target: 1, proba: 0.6210, predicted: 1, correct: true },
  { symbol: "EVEN3", target: 1, proba: 0.6023, predicted: 1, correct: true },
  { symbol: "SOND6", target: 1, proba: 0.5995, predicted: 1, correct: true },
  { symbol: "GRND3", target: 1, proba: 0.5932, predicted: 1, correct: true },
  { symbol: "USIM3", target: 1, proba: 0.5899, predicted: 1, correct: true },
  { symbol: "ECOR3", target: 1, proba: 0.5800, predicted: 1, correct: true },
  { symbol: "BRSR6", target: 1, proba: 0.5680, predicted: 1, correct: true },
  { symbol: "PDTC3", target: 1, proba: 0.5618, predicted: 1, correct: true },
  { symbol: "UGPA3", target: 1, proba: 0.5620, predicted: 1, correct: true },
  { symbol: "RENT3", target: 0, proba: 0.5586, predicted: 1, correct: false },
  { symbol: "TFCO4", target: 0, proba: 0.5574, predicted: 1, correct: false },
  { symbol: "B3SA3", target: 0, proba: 0.5527, predicted: 1, correct: false },
  { symbol: "CSED3", target: 1, proba: 0.5477, predicted: 1, correct: true },
  { symbol: "GGPS3", target: 1, proba: 0.5453, predicted: 1, correct: true },
  { symbol: "IGTI3", target: 0, proba: 0.5390, predicted: 1, correct: false },
  { symbol: "TGMA3", target: 1, proba: 0.5369, predicted: 1, correct: true },
  { symbol: "BBDC3", target: 1, proba: 0.5338, predicted: 1, correct: true },
  { symbol: "VALE3", target: 1, proba: 0.5311, predicted: 1, correct: true },
  { symbol: "NGRD3", target: 1, proba: 0.5145, predicted: 1, correct: true },
  { symbol: "CXSE3", target: 0, proba: 0.5115, predicted: 1, correct: false },
  { symbol: "ABCB4", target: 0, proba: 0.5016, predicted: 1, correct: false },
  { symbol: "UNIP6", target: 1, proba: 0.4976, predicted: 0, correct: false },
  { symbol: "MELK3", target: 0, proba: 0.4926, predicted: 0, correct: true },
  { symbol: "SHUL4", target: 1, proba: 0.4903, predicted: 0, correct: false },
  { symbol: "EQTL3", target: 1, proba: 0.4867, predicted: 0, correct: false },
  { symbol: "BMGB4", target: 0, proba: 0.4844, predicted: 0, correct: true },
  { symbol: "DEXP3", target: 0, proba: 0.4815, predicted: 0, correct: true },
  { symbol: "ALPK3", target: 0, proba: 0.4797, predicted: 0, correct: true },
  { symbol: "DMVF3", target: 1, proba: 0.4728, predicted: 0, correct: false },
  { symbol: "BBSE3", target: 0, proba: 0.4634, predicted: 0, correct: true },
  { symbol: "BAZA3", target: 0, proba: 0.4550, predicted: 0, correct: true },
  { symbol: "LPSB3", target: 0, proba: 0.4542, predicted: 0, correct: true },
  { symbol: "PSSA3", target: 1, proba: 0.4533, predicted: 0, correct: false },
  { symbol: "CVCB3", target: 0, proba: 0.4445, predicted: 0, correct: true },
  { symbol: "CGAS5", target: 1, proba: 0.4426, predicted: 0, correct: false },
  { symbol: "CGAS3", target: 1, proba: 0.4332, predicted: 0, correct: false },
  { symbol: "VLID3", target: 0, proba: 0.4279, predicted: 0, correct: true },
  { symbol: "LOGN3", target: 0, proba: 0.4265, predicted: 0, correct: true },
  { symbol: "BEEF3", target: 0, proba: 0.4249, predicted: 0, correct: true },
  { symbol: "DXCO3", target: 0, proba: 0.4217, predicted: 0, correct: true },
  { symbol: "BBAS3", target: 0, proba: 0.4158, predicted: 0, correct: true },
  { symbol: "LREN3", target: 0, proba: 0.4143, predicted: 0, correct: true },
  { symbol: "VVEO3", target: 0, proba: 0.4051, predicted: 0, correct: true },
  { symbol: "SLCE3", target: 0, proba: 0.3888, predicted: 0, correct: true },
  { symbol: "BRKM5", target: 1, proba: 0.3855, predicted: 0, correct: false },
  { symbol: "INTB3", target: 0, proba: 0.3851, predicted: 0, correct: true },
  { symbol: "QUAL3", target: 0, proba: 0.3739, predicted: 0, correct: true },
  { symbol: "LJQQ3", target: 0, proba: 0.3607, predicted: 0, correct: true },
  { symbol: "RAIL3", target: 0, proba: 0.3576, predicted: 0, correct: true },
  { symbol: "SMTO3", target: 0, proba: 0.3542, predicted: 0, correct: true },
  { symbol: "TCSA3", target: 0, proba: 0.3535, predicted: 0, correct: true },
  { symbol: "POMO4", target: 0, proba: 0.3528, predicted: 0, correct: true },
  { symbol: "RAPT4", target: 0, proba: 0.3504, predicted: 0, correct: true },
  { symbol: "HBRE3", target: 0, proba: 0.3408, predicted: 0, correct: true },
  { symbol: "ETER3", target: 0, proba: 0.3414, predicted: 0, correct: true },
  { symbol: "LIGT3", target: 0, proba: 0.3396, predicted: 0, correct: true },
  { symbol: "CSAN3", target: 0, proba: 0.3170, predicted: 0, correct: true },
  { symbol: "TASA4", target: 0, proba: 0.3015, predicted: 0, correct: true },
  { symbol: "TASA3", target: 0, proba: 0.2955, predicted: 0, correct: true },
  { symbol: "AZZA3", target: 0, proba: 0.2936, predicted: 0, correct: true },
  { symbol: "SCAR3", target: 0, proba: 0.2789, predicted: 0, correct: true },
  { symbol: "CBEE3", target: 0, proba: 0.2584, predicted: 0, correct: true },
  { symbol: "CEGR3", target: 0, proba: 0.2492, predicted: 0, correct: true },
  { symbol: "ONCO3", target: 0, proba: 0.2187, predicted: 0, correct: true },
  { symbol: "HAPV3", target: 1, proba: 0.214, predicted: 0, correct: false },
  { symbol: "CEDO4", target: 0, proba: 0.2135, predicted: 0, correct: true },
  { symbol: "AALR3", target: 0, proba: 0.1832, predicted: 0, correct: true },
  { symbol: "FIQE3", target: 1, proba: 0.5077, predicted: 1, correct: true },
  { symbol: "SOND5", target: 1, proba: 0.584, predicted: 1, correct: true },
  { symbol: "BHIA3", target: 0, proba: 0.1567, predicted: 0, correct: true },
]

// ============================================================================
// CONFUSION MATRIX (computed from predictions)
// ============================================================================

export const confusionMatrix = {
  tn: 38, // True Negatives (actual=0, predicted=0)
  fp: 8,  // False Positives (actual=0, predicted=1)
  fn: 9,  // False Negatives (actual=1, predicted=0)
  tp: 37, // True Positives (actual=1, predicted=1)
}

// ============================================================================
// ROC CURVE DATA (from image: AUC = 0.891)
// Approximated from the ROC curve in model_evaluation.png
// ============================================================================

export const rocCurveData = [
  { fpr: 0.0, tpr: 0.0 },
  { fpr: 0.0, tpr: 0.15 },
  { fpr: 0.02, tpr: 0.25 },
  { fpr: 0.04, tpr: 0.35 },
  { fpr: 0.06, tpr: 0.50 },
  { fpr: 0.08, tpr: 0.58 },
  { fpr: 0.10, tpr: 0.63 },
  { fpr: 0.13, tpr: 0.70 },
  { fpr: 0.17, tpr: 0.78 },
  { fpr: 0.20, tpr: 0.80 },
  { fpr: 0.24, tpr: 0.82 },
  { fpr: 0.30, tpr: 0.85 },
  { fpr: 0.35, tpr: 0.87 },
  { fpr: 0.40, tpr: 0.89 },
  { fpr: 0.50, tpr: 0.93 },
  { fpr: 0.60, tpr: 0.96 },
  { fpr: 0.70, tpr: 0.97 },
  { fpr: 0.80, tpr: 0.98 },
  { fpr: 0.90, tpr: 0.99 },
  { fpr: 1.0, tpr: 1.0 },
]

export const rocDiagonal = [
  { fpr: 0.0, tpr: 0.0 },
  { fpr: 1.0, tpr: 1.0 },
]

// ============================================================================
// PIPELINE METRICS (real)
// ============================================================================

export const pipelineMetrics = {
  tickersCollected: 150,
  tickersFiltered: 92,
  featuresGenerated: 120,
  featuresAfterSelection: 40,
  featuresAfterReduction: 18,
  nonZeroCoefficients: 5,
  samplesPerFeatureRatio: 5.1,
  bestModelAuc: 0.8509,
  bestModelAucStd: 0.0517,
  bestModel: "LogisticRegression",
  testAuc: 0.891,
  testAccuracy: 0.815,
  targetHorizon: "1 month",
  cvFolds: 5,
}

// ============================================================================
// FEATURE SELECTION FUNNEL (from 01_feature_selection_v3.py)
// ============================================================================

export const featureSelectionFunnel = [
  { step: "Original", count: 120, label: "Raw features engineered" },
  { step: "Leakage Removed", count: 95, label: "After blacklist (returns, sharpe, etc.)" },
  { step: "Missing Filtered", count: 82, label: "Features with < 50% missing" },
  { step: "Variance Check", count: 80, label: "Non-zero variance" },
  { step: "Decorrelated", count: 60, label: "Correlation < 0.95 threshold" },
  { step: "Selected (RF)", count: 40, label: "Top features by RF importance" },
  { step: "Final (LR)", count: 18, label: "Used in LogisticRegression" },
]

// ============================================================================
// LEAKAGE BLACKLIST (from 01_feature_selection_v3.py)
// ============================================================================

export const leakageBlacklist = [
  "return_21d", "return_63d", "return_126d", "return_252d",
  "sharpe_21d", "sharpe_63d", "sharpe_126d", "sharpe_252d",
  "sortino_21d", "sortino_63d", "sortino_126d", "sortino_252d",
  "max_drawdown_21d", "max_drawdown_63d", "max_drawdown_126d", "max_drawdown_252d",
  "positive_days_pct_21d", "positive_days_pct_63d", "positive_days_pct_126d", "positive_days_pct_252d",
  "downside_vol_21d", "downside_vol_63d", "downside_vol_126d", "downside_vol_252d",
  "ytd_return",
]
