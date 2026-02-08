import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description:
    "About VSFI15 — the mission, philosophy, and tech stack behind the quant research project.",
}

const techStack = [
  { category: "Data Collection", tools: "BRAPI API, Python, JSON" },
  { category: "Feature Engineering", tools: "Pandas, NumPy, SciPy" },
  { category: "Machine Learning", tools: "LightGBM, XGBoost, scikit-learn" },
  { category: "Validation", tools: "Stratified K-Fold CV, AUC-ROC" },
  { category: "Target Design", tools: "Composite score, winsorization" },
  { category: "Frontend", tools: "Next.js, Tailwind CSS, Recharts" },
  { category: "Deployment", tools: "Vercel" },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          About
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          The what, why, and how behind VSFI15.
        </p>
      </header>

      <article className="flex flex-col gap-10">
        {/* Mission */}
        <section>
          <h2 className="mb-3 text-base font-medium text-foreground">
            Mission
          </h2>
          <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              VSFI15 is a personal research project exploring the intersection of
              machine learning and quantitative investing on the Brazilian B3
              stock exchange.
            </p>
            <p>
              The goal is to build a systematic, data-driven approach to stock
              selection — one that relies on fundamental analysis, technical
              signals, and macro context rather than intuition or market
              narratives.
            </p>
            <p>
              This site serves as a public engineering journal: a record of every
              decision, experiment, and iteration as the system evolves from raw
              data to a functioning investment strategy.
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section>
          <h2 className="mb-3 text-base font-medium text-foreground">
            Investment Philosophy
          </h2>
          <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              The strategy is built around a risk-adjusted composite score that
              blends five dimensions: momentum (30%), quality (30%), valuation
              (20%), growth (10%), and a risk penalty (10%). Each dimension is
              winsorized and z-score normalized to prevent outlier contamination.
            </p>
            <p>
              Rather than predicting exact returns, the model classifies stocks
              into a binary target (outperform vs. underperform) over a 3-month
              horizon. This reduces noise and produces more stable predictions
              with the limited sample sizes typical of the Brazilian market.
            </p>
            <p>
              Strong regularization is enforced at every stage — from L1 feature
              selection to shallow tree depths — to prevent the overfitting that
              plagues small-sample financial ML.
            </p>
          </div>
        </section>

        {/* Principles */}
        <section>
          <h2 className="mb-3 text-base font-medium text-foreground">
            Design Principles
          </h2>
          <ul className="flex flex-col gap-2">
            {[
              ["No data leakage", "Every feature is strictly backward-looking. Forward returns, future Sharpe ratios, and any look-ahead signals are eliminated during feature selection."],
              ["Regularization over complexity", "Shallow trees, strong L1/L2 penalties, and conservative hyperparameters over complex deep architectures."],
              ["Transparency", "Every step is documented publicly. Failures and wrong turns are recorded alongside successes."],
              ["Reproducibility", "Deterministic pipelines with fixed random seeds, versioned datasets, and explicit configuration objects."],
            ].map(([title, desc]) => (
              <li key={title} className="rounded-lg border border-border/50 bg-card p-4">
                <span className="text-sm font-medium text-foreground">{title}</span>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Tech stack */}
        <section>
          <h2 className="mb-3 text-base font-medium text-foreground">
            Tech Stack
          </h2>
          <div className="rounded-lg border border-border/50 bg-card">
            {techStack.map((item, i) => (
              <div
                key={item.category}
                className={`flex items-baseline justify-between px-4 py-3 ${
                  i < techStack.length - 1 ? "border-b border-border/50" : ""
                }`}
              >
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {item.category}
                </span>
                <span className="font-mono text-xs text-foreground">{item.tools}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Author */}
        <section>
          <h2 className="mb-3 text-base font-medium text-foreground">
            Author
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Built by Noah. Data scientist and engineer interested in the
            systematic application of machine learning to financial markets.
            This project is a build-in-public experiment — a learning exercise,
            not financial advice.
          </p>
        </section>
      </article>
    </div>
  )
}
