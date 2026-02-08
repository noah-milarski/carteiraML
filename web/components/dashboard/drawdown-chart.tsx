"use client"

import {
  Area,
  AreaChart,
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
import { drawdownData } from "@/lib/dashboard-data"

const chartConfig = {
  portfolio: {
    label: "VSFI15",
    color: "hsl(0, 72%, 55%)",
  },
  ibovespa: {
    label: "IBOVESPA",
    color: "hsl(0, 0%, 55%)",
  },
}

export function DrawdownChart() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Drawdown</CardTitle>
        <CardDescription className="text-xs">
          Maximum peak-to-trough decline (%)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={drawdownData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
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
                domain={[-5, 0.5]}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="portfolio"
                stroke={chartConfig.portfolio.color}
                fill={chartConfig.portfolio.color}
                fillOpacity={0.15}
                strokeWidth={1.5}
                name="VSFI15"
              />
              <Area
                type="monotone"
                dataKey="ibovespa"
                stroke={chartConfig.ibovespa.color}
                fill={chartConfig.ibovespa.color}
                fillOpacity={0.08}
                strokeWidth={1}
                strokeDasharray="4 4"
                name="IBOVESPA"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
