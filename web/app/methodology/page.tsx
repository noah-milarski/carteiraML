import type { Metadata } from "next"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "Detailed methodology of the VSFI15 ML pipeline — from data collection through model training.",
}

const pipelineSteps = [
  {
    number: "01",
    title: "Data Collection",
    description:
      "Collect fundamental, technical, and macro data for 150+ B3 tickers via the BRAPI API.",
    details: [
      "13 financial modules per ticker (balance sheet, income statement, cash flow, key statistics, etc.)",
      "Historical price data with configurable lookback (up to 5 years)",
      "Macro data: SELIC rate, inflation indices, USD/BRL exchange rate",
      "Rate limiting with exponential backoff and checkpoint recovery",
      "Batch processing with automatic resume on failure",
    ],
    output: "~150 JSON files + macro_data.json",
  },
  {
    number: "02",
    title: "Feature Engineering",
    description:
      "Transform raw API data into 120+ ML-ready features across 7 categories.",
    details: [
      "Fundamentals: P/E, P/B, EV/EBITDA, ROE, ROA, margins (6 types)",
      "Financials: FCF yield, debt/equity, current ratio, Piotroski F-Score, Altman Z-Score",
      "Technicals: Momentum (1m, 3m, 6m, 12m), volatility, RSI, 52-week position",
      "Macro: SELIC delta, USD/BRL level, inflation context",
      "Analysts: Consensus score, target upside, coverage breadth",
      "Quality: Composite quality scores, margin stability, earnings consistency",
      "Historical: Rolling averages, acceleration, percentile ranks",
    ],
    output: "features_dataset.csv (~120 columns)",
  },
  {
    number: "03",
    title: "Feature Selection",
    description:
      "Eliminate data leakage and reduce the initial feature set from 120 to 40.",
    details: [
      "CRITICAL: Removed 24 features with forward-looking data leakage",
      "Missing value filter: drop features with >50% missing",
      "Zero variance filter: remove constant/near-constant features",
      "Correlation filter: remove one of each highly-correlated pair (r > 0.90)",
      "Random Forest importance ranking with 3-fold CV validation",
    ],
    output: "features_selected_v3.csv (~40 columns)",
  },
  {
    number: "04",
    title: "Target Engineering",
    description:
      "Design a risk-adjusted composite target using a single 3-month horizon.",
    details: [
      "Single horizon (3 months / 63 trading days) to reduce noise",
      "Composite score: 30% momentum + 30% quality + 20% valuation + 10% growth + 10% risk penalty",
      "Winsorization at 2.5% tails before z-score normalization",
      "Binary classification: top 50% = class 1, bottom 50% = class 0",
      "Validation: checked target distribution, feature-target correlations, class balance",
    ],
    output: "features_with_targets_v4.csv",
  },
  {
    number: "05",
    title: "Feature Reduction",
    description:
      "Reduce from 40 to 18 features using univariate AUC and multicollinearity analysis.",
    details: [
      "Univariate AUC analysis: rank each feature individually against the binary target",
      "Missing value filter: drop features with >15% missing",
      "Multicollinearity removal: iteratively drop features with pairwise correlation >0.85",
      "Final set: 18 features with mean univariate AUC of 0.65",
      "Samples-to-features ratio: 5.6:1 (adequate for tree-based models)",
    ],
    output: "features_reduced_v4.csv (18 columns + target)",
  },
  {
    number: "06",
    title: "Baseline Models",
    description:
      "Train and evaluate 4 model architectures with strong regularization.",
    details: [
      "Logistic Regression: L1 penalty, C=0.1, balanced class weights",
      "Random Forest: max_depth=5, min_samples_leaf=5, sqrt features",
      "LightGBM: depth=3, lr=0.05, 50 trees, L1+L2 regularization",
      "XGBoost: depth=3, lr=0.05, 50 trees, L1+L2 regularization",
      "Evaluation: 5-fold stratified CV with AUC-ROC as primary metric",
      "Overfitting monitoring: train-val gap tracked per fold",
    ],
    output: "Best model: LightGBM (Val AUC = 0.72, Gap = 0.05)",
  },
]

export default function MethodologyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Methodology
        </h1>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
          A step-by-step breakdown of the entire ML pipeline, from raw API data
          to trained models. Each step is designed to minimize overfitting and
          eliminate data leakage.
        </p>
      </header>

      {/* Pipeline overview formula */}
      <section className="mb-12 rounded-lg border border-border/50 bg-card p-6">
        <h2 className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Target Composite Formula
        </h2>
        <div className="overflow-x-auto">
          <p className="font-mono text-sm leading-relaxed text-foreground">
            {"score = 0.30 * momentum + 0.30 * quality + 0.20 * valuation + 0.10 * growth + 0.10 * risk"}
          </p>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Each dimension is winsorized at the 2.5% / 97.5% percentiles, then
          z-score normalized. Valuation and risk are inverted (lower is better).
        </p>
      </section>

      {/* Pipeline steps */}
      <div className="flex flex-col gap-8">
        {pipelineSteps.map((step) => (
          <PipelineStep key={step.number} step={step} />
        ))}
      </div>

      {/* Key decisions */}
      <section className="mt-12">
        <h2 className="mb-4 text-base font-medium text-foreground">
          Key Design Decisions
        </h2>
        <div className="flex flex-col gap-3">
          {[
            {
              question: "Why binary classification instead of regression?",
              answer:
                "With ~100 samples and 18 features, predicting exact returns introduces too much noise. Binary classification (outperform vs. underperform) is more robust and produces more stable cross-validation results.",
            },
            {
              question: "Why a single 3-month horizon?",
              answer:
                "Multiple horizons (1m, 3m, 6m) would require separate models and increase the multiple-comparisons problem. A 3-month horizon balances signal strength with prediction stability for the B3 market.",
            },
            {
              question: "Why such strong regularization?",
              answer:
                "Small sample sizes (~100 stocks) make overfitting the dominant risk. Shallow trees (depth 3), low learning rates (0.05), and explicit L1/L2 penalties keep the train-validation AUC gap under 0.05 for the best model.",
            },
            {
              question: "Why remove features with univariate AUC < 0.60?",
              answer:
                "Features with AUC near 0.50 add noise without signal. A 0.60 threshold ensures every retained feature has at least moderate individual predictive power, reducing dimensionality from 40 to 18.",
            },
          ].map((item) => (
            <div
              key={item.question}
              className="rounded-lg border border-border/50 bg-card p-4"
            >
              <h3 className="text-sm font-medium text-foreground">
                {item.question}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function PipelineStep({
  step,
}: {
  step: (typeof pipelineSteps)[number]
}) {
  return (
    <article className="group">
      <div className="flex gap-4">
        {/* Step number */}
        <div className="flex shrink-0 flex-col items-center">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border/50 bg-card font-mono text-xs font-semibold text-primary">
            {step.number}
          </span>
          <div className="mt-2 h-full w-px bg-border/50" />
        </div>

        {/* Content */}
        <div className="flex-1 pb-2">
          <h3 className="text-base font-medium text-foreground">
            {step.title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {step.description}
          </p>

          <ul className="mt-3 flex flex-col gap-1.5">
            {step.details.map((detail) => (
              <li
                key={detail}
                className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                {detail}
              </li>
            ))}
          </ul>

          <div className="mt-3 inline-flex items-center gap-1.5 rounded-sm bg-secondary px-2 py-1">
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Output:
            </span>
            <span className="font-mono text-[11px] text-foreground">
              {step.output}
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}
