import { cn } from "@/lib/utils"

export function Badge({ className, ...props }) {
  return (
    <span
      className={cn("inline-flex items-center rounded-full border border-border px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wider", className)}
      {...props}
    />
  )
}
