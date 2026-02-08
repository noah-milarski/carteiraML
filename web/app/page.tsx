import { PostFeed } from "@/components/post-feed"

export default function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-balance text-2xl font-semibold tracking-tight text-foreground">
          VSFI15
        </h1>
        <p className="mt-3 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground">
          Engineering journal for a machine-learning-driven quantitative
          investment strategy on the Brazilian B3 stock exchange.
        </p>
        <div className="mt-4 flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-sm bg-primary/10 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Active Research
          </span>
          <span className="text-xs text-muted-foreground">
            7 entries
          </span>
        </div>
      </header>

      <PostFeed />
    </div>
  )
}
