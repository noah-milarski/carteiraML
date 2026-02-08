"use client"

import {
  Cell,
  Pie,
  PieChart,
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
import { sectorAllocation } from "@/lib/dashboard-data"

const chartConfig = Object.fromEntries(
  sectorAllocation.map((s) => [
    s.sector.toLowerCase(),
    { label: s.sector, color: s.fill },
  ])
)

export function SectorAllocation() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Sector Allocation</CardTitle>
        <CardDescription className="text-xs">
          Portfolio weight by GICS sector
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-6">
          <ChartContainer config={chartConfig} className="h-[180px] w-[180px] shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent />} />
                <Pie
                  data={sectorAllocation}
                  dataKey="weight"
                  nameKey="sector"
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={75}
                  strokeWidth={2}
                  stroke="hsl(var(--background))"
                >
                  {sectorAllocation.map((entry) => (
                    <Cell key={entry.sector} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>

          <div className="flex flex-col gap-1.5">
            {sectorAllocation.map((s) => (
              <div key={s.sector} className="flex items-center gap-2 text-xs">
                <span
                  className="h-2 w-2 rounded-sm"
                  style={{ backgroundColor: s.fill }}
                />
                <span className="text-muted-foreground">{s.sector}</span>
                <span className="ml-auto font-mono text-foreground">{s.weight}%</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
