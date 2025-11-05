"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { IoMdClose } from "react-icons/io"

import { cn } from "@/lib/utils"

// Add a VisuallyHidden component for accessibility
const VisuallyHidden = React.forwardRef(({ children, ...props }, forwardedRef) => {
  return (
    <span
      ref={forwardedRef}
      className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0"
      style={{ clip: "rect(0 0 0 0)" }}
      {...props}
    >
      {children}
    </span>
  );
});
VisuallyHidden.displayName = "VisuallyHidden";

function Sheet({
  ...props
}) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({
  ...props
}) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({
  ...props
}) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({
  ...props
}) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/75", // Increased opacity, removed blur
        "transition-all duration-400 ease-in-out",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      {...props} />
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  title = "Navigation Sheet",
  ...props
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "fixed z-50 flex flex-col gap-4 shadow-lg",
          "bg-[var(--color-primary)] text-[var(--color-text)]",
          "transform transition-all duration-300 ease-in-out",

          side === "right" && [
            "inset-y-0 right-0 h-full w-3/4 sm:max-w-sm",
            "-translate-x-full opacity-0",
            "data-[state=open]:translate-x-0 data-[state=open]:opacity-100",
            "shadow-[-10px_0px_15px_-3px_rgba(0,0,0,0.1)]"
          ],
          side === "left" && [
            "inset-y-0 left-0 h-full w-3/4 sm:max-w-sm",
            "translate-x-[-100%] opacity-0",
            "data-[state=open]:translate-x-0 data-[state=open]:opacity-100",
            "shadow-[10px_0px_15px_-3px_rgba(0,0,0,0.1)]"
          ],
          side === "top" && [
            "inset-x-0 top-0 h-auto",
            "-translate-y-full opacity-0",
            "data-[state=open]:translate-y-0 data-[state=open]:opacity-100",
            "shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
          ],
          side === "bottom" && [
            "inset-x-0 bottom-0 h-auto",
            "translate-y-full opacity-0",
            "data-[state=open]:translate-y-0 data-[state=open]:opacity-100",
            "shadow-[0px_-10px_15px_-3px_rgba(0,0,0,0.1)]"
          ],
          className
        )}
        {...props}
      >
        {/* Add a default title for screen readers if none is provided in children */}
        {title && (
          <VisuallyHidden>
            <SheetPrimitive.Title>{title}</SheetPrimitive.Title>
          </VisuallyHidden>
        )}
        {children}
        <SheetPrimitive.Close
          className="absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] disabled:pointer-events-none text-[var(--color-text)]">
          <IoMdClose className="size-8" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({
  className,
  ...props
}) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props} />
  );
}

function SheetFooter({
  className,
  ...props
}) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props} />
  );
}

function SheetTitle({
  className,
  ...props
}) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-foreground font-semibold", className)}
      {...props} />
  );
}

function SheetDescription({
  className,
  ...props
}) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props} />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
