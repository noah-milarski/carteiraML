export interface Post {
  slug: string
  title: string
  date: string
  tags: string[]
  summary: string
  readingTime: string
}

export const posts: Post[] = [
  {
    slug: "baseline-models-trained",
    title: "Baseline Models Trained: LightGBM Leads at 0.72 AUC",
    date: "2026-02-06",
    tags: ["ml", "models", "baseline"],
    summary:
      "Trained 4 baseline models (Logistic Regression, Random Forest, LightGBM, XGBoost) with 5-fold stratified CV. LightGBM achieved the best validation AUC of 0.72 with minimal overfitting. Strong regularization and shallow trees kept the train-val gap under 0.05.",
    readingTime: "5 min",
  },
  {
    slug: "feature-reduction-40-to-18",
    title: "Feature Reduction: From 40 to 18 Features via Univariate AUC",
    date: "2026-02-06",
    tags: ["features", "dimensionality", "pipeline"],
    summary:
      "Reduced the feature set from 40 to 18 using univariate AUC analysis, multicolinearity removal (r > 0.85), and missing value filtering. The final set has a mean AUC of 0.65 with a healthy 5.6:1 samples-to-features ratio.",
    readingTime: "4 min",
  },
  {
    slug: "target-engineering-v4",
    title: "Target Engineering V4: Risk-Adjusted Composite Score",
    date: "2026-02-06",
    tags: ["target", "methodology", "risk"],
    summary:
      "Redesigned the target using a single 3-month horizon with a risk-adjusted composite score. Weighted 30% momentum, 30% quality, 20% valuation, 10% growth, 10% risk penalty. Winsorization at 2.5% tails for robust normalization.",
    readingTime: "6 min",
  },
  {
    slug: "feature-selection-no-leakage",
    title: "Feature Selection V3: Eliminating Data Leakage",
    date: "2026-02-06",
    tags: ["features", "leakage", "methodology"],
    summary:
      "Critical fix: removed 24 features with data leakage (forward returns, Sharpe ratios computed over prediction period). Applied missing value, zero variance, and correlation filters. Random Forest importance ranking with 3-fold CV AUC validation.",
    readingTime: "5 min",
  },
  {
    slug: "feature-engineering-complete",
    title: "Feature Engineering: 120+ Features from BRAPI Data",
    date: "2026-02-05",
    tags: ["features", "engineering", "data"],
    summary:
      "Built a comprehensive feature engineering pipeline generating 120+ features per ticker: fundamentals (P/E, ROE, margins), financials (FCF, debt ratios), technicals (momentum, volatility, RSI), macro (SELIC, USD/BRL), analyst consensus, and quality scores (Piotroski F-Score, Altman Z).",
    readingTime: "8 min",
  },
  {
    slug: "data-collection-brapi",
    title: "Data Collection: 150+ Tickers via BRAPI API",
    date: "2026-02-03",
    tags: ["data", "api", "infrastructure"],
    summary:
      "Implemented a robust data collection pipeline using the BRAPI API with rate limiting, exponential backoff, checkpointing, and 13 financial modules. Collected fundamental, technical, and macro data for 150+ B3 tickers with full error recovery.",
    readingTime: "7 min",
  },
  {
    slug: "project-kickoff",
    title: "Project Kickoff: Building a Quant Portfolio with ML",
    date: "2026-02-01",
    tags: ["meta", "philosophy", "kickoff"],
    summary:
      "Introducing VSFI15: a machine-learning-driven quantitative investment strategy for the Brazilian B3 market. The goal is to build a systematic, data-driven approach to stock selection using feature engineering, dimensionality reduction, and gradient boosting models.",
    readingTime: "3 min",
  },
]

export function getAllTags(): string[] {
  const tagSet = new Set<string>()
  for (const post of posts) {
    for (const tag of post.tags) {
      tagSet.add(tag)
    }
  }
  return Array.from(tagSet).sort()
}
