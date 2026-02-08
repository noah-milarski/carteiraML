"use client"

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
} from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { featureImportance } from "@/lib/dashboard-data"

const chartConfig = {
  coefficient: {
    label: "|Coefficient|",
    color: "hsl(152, 60%, 45%)",
  },
}

// Only show top features (non-zero + a few zero for context)
const topFeatures = featureImportance.slice(0, 10)

export function FeatureImportanceChart() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Top Features (LogisticRegression)</CardTitle>
        <CardDescription className="text-xs">
          Absolute coefficient values -- 5 of 18 features have non-zero weight
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={topFeatures}
              layout="vertical"
              margin={{ top: 5, right: 10, left: 90, bottom: 0 }}
            >
              <XAxis
                type="number"
                tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                type="category"
                dataKey="feature"
                tick={{ fontSize: 9, fill: "hsl(var(--muted-foreground))" }}
                tickLine={false}
                axisLine={false}
                width={90}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ReferenceLine x={0} stroke="hsl(var(--border))" />
              <Bar
                dataKey="coefficient"
                radius={[0, 3, 3, 0]}
                name="|Coefficient|"
              >
                {topFeatures.map((entry, index) => (
                  <Cell
                    key={entry.feature}
                    fill={entry.coefficient > 0 ? "hsl(152, 60%, 45%)" : "hsl(0, 0%, 35%)"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
