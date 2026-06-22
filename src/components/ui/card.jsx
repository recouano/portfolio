import { cn } from "@/lib/utils"

export function Card({ className, ...props }) {
  return <div className={cn("rounded-3xl border border-border bg-card text-card-foreground", className)} {...props} />
}
