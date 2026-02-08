import type { Post } from "@/lib/posts"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

export function PostCard({ post }: { post: Post }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  return (
    <article className="group border-b border-border/50 py-6 last:border-0">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <time dateTime={post.date}>{formattedDate}</time>
          <span className="text-border">{"/"}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readingTime}
          </span>
        </div>

        <h2 className="text-base font-medium leading-snug text-foreground transition-colors group-hover:text-primary">
          {post.title}
        </h2>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {post.summary}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="rounded-sm px-1.5 py-0 text-[10px] font-normal uppercase tracking-wider"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  )
}
