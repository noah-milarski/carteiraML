import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { modelComparison } from "@/lib/dashboard-data"

export function ModelComparisonTable() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Model Comparison</CardTitle>
        <CardDescription className="text-xs">
          5-fold stratified cross-validation on 92 B3 stocks
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-border/50">
              <TableHead className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Model</TableHead>
              <TableHead className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground text-right">Val AUC</TableHead>
              <TableHead className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground text-right">Train AUC</TableHead>
              <TableHead className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground text-right">Precision</TableHead>
              <TableHead className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground text-right">Recall</TableHead>
              <TableHead className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground text-right">F1</TableHead>
              <TableHead className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground text-right">Gap</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {modelComparison.map((row) => (
              <TableRow key={row.model} className="border-border/50">
                <TableCell className="font-mono text-xs">
                  <span className="flex items-center gap-2">
                    {row.status === "best" && (
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    )}
                    {row.model}
                  </span>
                </TableCell>
                <TableCell className={cn(
                  "text-right font-mono text-xs",
                  row.status === "best" && "text-primary font-medium"
                )}>
                  {row.valAuc.toFixed(3)}
                  <span className="ml-0.5 text-[10px] text-muted-foreground">
                    {"\u00B1"}{row.valAucStd.toFixed(2)}
                  </span>
                </TableCell>
                <TableCell className="text-right font-mono text-xs">{row.trainAuc.toFixed(3)}</TableCell>
                <TableCell className="text-right font-mono text-xs">{row.precision.toFixed(3)}</TableCell>
                <TableCell className="text-right font-mono text-xs">{row.recall.toFixed(3)}</TableCell>
                <TableCell className="text-right font-mono text-xs">{row.f1.toFixed(3)}</TableCell>
                <TableCell className={cn(
                  "text-right font-mono text-xs",
                  row.gap > 0.10 && "text-destructive",
                  row.gap > 0.05 && row.gap <= 0.10 && "text-amber-500"
                )}>
                  {row.gap > 0 ? "+" : ""}{row.gap.toFixed(3)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
