"use client"

import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
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
import { portfolioPerformance } from "@/lib/dashboard-data"

const chartConfig = {
  portfolio: {
    label: "VSFI15 Portfolio",
    color: "hsl(152, 60%, 45%)",
  },
  ibovespa: {
    label: "IBOVESPA",
    color: "hsl(0, 0%, 55%)",
  },
}

export function PerformanceChart() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Cumulative Returns</CardTitle>
        <CardDescription className="text-xs">
          Portfolio vs IBOVESPA (indexed to 100)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={portfolioPerformance} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                tickLine={false}
                axisLine={false}
                domain={[95, 135]}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="portfolio"
                stroke={chartConfig.portfolio.color}
                strokeWidth={2}
                dot={false}
                name="VSFI15 Portfolio"
              />
              <Line
                type="monotone"
                dataKey="ibovespa"
                stroke={chartConfig.ibovespa.color}
                strokeWidth={1.5}
                strokeDasharray="4 4"
                dot={false}
                name="IBOVESPA"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
