import type { Metadata } from "next"
import { MetricCard } from "@/components/metric-card"
import { PerformanceChart } from "@/components/dashboard/performance-chart"
import { DrawdownChart } from "@/components/dashboard/drawdown-chart"
import { FeatureImportanceChart } from "@/components/dashboard/feature-importance-chart"
import { ModelComparisonTable } from "@/components/dashboard/model-comparison-table"
import { SectorAllocation } from "@/components/dashboard/sector-allocation"
import { pipelineMetrics } from "@/lib/dashboard-data"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Quantitative portfolio metrics and backtest results.",
}

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Dashboard
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Portfolio performance, model evaluation, and pipeline metrics.
          Data is currently mocked from ML pipeline outputs.
        </p>
      </header>

      {/* Key metrics */}
      <section className="mb-10">
        <h2 className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Key Metrics
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <MetricCard
            label="Best AUC"
            value={pipelineMetrics.bestModelAuc.toFixed(2)}
            subValue={pipelineMetrics.bestModel}
            trend="up"
          />
          <MetricCard
            label="Sharpe Ratio"
            value="1.42"
            subValue="Annualized"
            trend="up"
          />
          <MetricCard
            label="Max Drawdown"
            value="-2.61%"
            subValue="Dec 2025"
            trend="down"
          />
          <MetricCard
            label="Volatility"
            value="14.2%"
            subValue="Annualized"
            trend="neutral"
          />
        </div>
      </section>

      {/* Performance */}
      <section className="mb-10">
        <h2 className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Performance
        </h2>
        <div className="flex flex-col gap-3">
          <PerformanceChart />
          <DrawdownChart />
        </div>
      </section>

      {/* Pipeline metrics */}
      <section className="mb-10">
        <h2 className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          ML Pipeline
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <MetricCard
            label="Tickers"
            value={`${pipelineMetrics.tickersCollected}+`}
            subValue="B3 universe"
          />
          <MetricCard
            label="Features"
            value={`${pipelineMetrics.featuresGenerated}`}
            subValue={`Reduced to ${pipelineMetrics.featuresAfterReduction}`}
          />
          <MetricCard
            label="Samples/Features"
            value={pipelineMetrics.samplesPerFeatureRatio.toFixed(1)}
            subValue="Ratio"
            trend="up"
          />
          <MetricCard
            label="CV Folds"
            value={`${pipelineMetrics.cvFolds}`}
            subValue="Stratified"
          />
        </div>
      </section>

      {/* Models & Features */}
      <section className="mb-10">
        <h2 className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Models & Features
        </h2>
        <div className="flex flex-col gap-3">
          <ModelComparisonTable />
          <div className="grid gap-3 md:grid-cols-2">
            <FeatureImportanceChart />
            <SectorAllocation />
          </div>
        </div>
      </section>

      {/* Pipeline funnel */}
      <section className="mb-4">
        <h2 className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Feature Funnel
        </h2>
        <div className="rounded-lg border border-border/50 bg-card p-6">
          <div className="flex items-center justify-between text-center">
            <FunnelStep
              label="Collected"
              value={`${pipelineMetrics.tickersCollected}+ tickers`}
              sublabel="BRAPI API"
            />
            <FunnelArrow />
            <FunnelStep
              label="Engineered"
              value={`${pipelineMetrics.featuresGenerated} features`}
              sublabel="7 categories"
            />
            <FunnelArrow />
            <FunnelStep
              label="Selected"
              value={`${pipelineMetrics.featuresAfterSelection} features`}
              sublabel="Leakage-free"
            />
            <FunnelArrow />
            <FunnelStep
              label="Reduced"
              value={`${pipelineMetrics.featuresAfterReduction} features`}
              sublabel="AUC > 0.60"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function FunnelStep({ label, value, sublabel }: { label: string; value: string; sublabel: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <span className="font-mono text-sm font-semibold text-foreground">{value}</span>
      <span className="text-[10px] text-muted-foreground">{sublabel}</span>
    </div>
  )
}

function FunnelArrow() {
  return (
    <div className="hidden text-muted-foreground/40 sm:block" aria-hidden>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}
