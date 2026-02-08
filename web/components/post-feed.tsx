"use client"

import { useState, useMemo } from "react"
import { posts, getAllTags } from "@/lib/posts"
import { PostCard } from "@/components/post-card"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

export function PostFeed() {
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const allTags = getAllTags()

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesTag = !activeTag || post.tags.includes(activeTag)
      const matchesSearch =
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesTag && matchesSearch
    })
  }, [activeTag, searchQuery])

  return (
    <div className="flex flex-col gap-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-md border border-border/50 bg-card py-2 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        <button
          onClick={() => setActiveTag(null)}
          className={cn(
            "rounded-sm px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider transition-colors",
            !activeTag
              ? "bg-foreground text-background"
              : "bg-secondary text-muted-foreground hover:text-foreground"
          )}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={cn(
              "rounded-sm px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider transition-colors",
              activeTag === tag
                ? "bg-foreground text-background"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Posts */}
      <div>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <PostCard key={post.slug} post={post} />)
        ) : (
          <p className="py-12 text-center text-sm text-muted-foreground">
            No posts match your filters.
          </p>
        )}
      </div>
    </div>
  )
}
