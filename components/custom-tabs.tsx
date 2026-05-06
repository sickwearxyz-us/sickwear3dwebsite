"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Self-contained Tabs implementation.
 * No external dependencies required.
 */

type TabsContextValue = {
  value: string
  onValueChange: (value: string) => void
}

const TabsContext = React.createContext<TabsContextValue | null>(null)

function useTabsContext(component: string) {
  const ctx = React.useContext(TabsContext)
  if (!ctx) {
    throw new Error(`<${component}> must be rendered inside <Tabs>`)
  }
  return ctx
}

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(function Tabs(
  { className, defaultValue = "", value: controlledValue, onValueChange, children, ...props },
  ref,
) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState<string>(defaultValue)
  const isControlled = controlledValue !== undefined
  const value = isControlled ? (controlledValue as string) : uncontrolledValue

  const handleChange = React.useCallback(
    (next: string) => {
      if (!isControlled) setUncontrolledValue(next)
      onValueChange?.(next)
    },
    [isControlled, onValueChange],
  )

  const ctx = React.useMemo<TabsContextValue>(
    () => ({ value, onValueChange: handleChange }),
    [value, handleChange],
  )

  return (
    <TabsContext.Provider value={ctx}>
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
})

const TabsList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function TabsList({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        role="tablist"
        className={cn(
          "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
          className,
        )}
        {...props}
      />
    )
  },
)

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(function TabsTrigger(
  { className, value, onClick, ...props },
  ref,
) {
  const ctx = useTabsContext("TabsTrigger")
  const isActive = ctx.value === value

  return (
    <button
      ref={ref}
      type="button"
      role="tab"
      aria-selected={isActive}
      data-state={isActive ? "active" : "inactive"}
      onClick={(event) => {
        ctx.onValueChange(value)
        onClick?.(event)
      }}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        className,
      )}
      {...props}
    />
  )
})

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(function TabsContent(
  { className, value, ...props },
  ref,
) {
  const ctx = useTabsContext("TabsContent")
  if (ctx.value !== value) return null

  return (
    <div
      ref={ref}
      role="tabpanel"
      data-state="active"
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
      {...props}
    />
  )
})

export { Tabs, TabsList, TabsTrigger, TabsContent }
