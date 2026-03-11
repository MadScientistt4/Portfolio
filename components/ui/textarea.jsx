import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({
  className,
  ...props
}) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground dark:bg-input/30",
        "flex field-sizing-content min-h-20 w-full rounded-lg border bg-transparent px-3 py-2 text-base shadow-sm",
        "transition-all duration-200 ease-out",
        "outline-none resize-none",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:shadow-md",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        "hover:border-muted-foreground/40",
        "md:text-sm",
        className
      )}
      {...props} />
  );
}

export { Textarea }
