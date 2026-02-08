import { cn } from "@/lib/utils"

interface MetricCardProps {
  label: string
  value: string
  subValue?: string
  trend?: "up" | "down" | "neutral"
}

export function MetricCard({ label, value, subValue, trend }: MetricCardProps) {
  return (
    <div className="flex flex-col gap-1 rounded-lg border border-border/50 bg-card p-4">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <span
        className={cn(
          "font-mono text-2xl font-semibold tracking-tight",
          trend === "up" && "text-emerald-500",
          trend === "down" && "text-red-400",
          !trend || trend === "neutral" ? "text-foreground" : ""
        )}
      >
        {value}
      </span>
      {subValue && (
        <span className="text-xs text-muted-foreground">{subValue}</span>
      )}
    </div>
  )
}
