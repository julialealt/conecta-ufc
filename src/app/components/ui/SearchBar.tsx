import * as React from "react"
import { Search, Sparkles } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "./Button"

export interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onFilterClick: () => void
  isFilterActive?: boolean
  containerClassName?: string
}

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, onFilterClick, isFilterActive = false, containerClassName, ...props }, ref) => {
    return (
      <div className={cn("flex items-center gap-x-2 w-full", containerClassName)}>
        <Button
          variant={isFilterActive ? "primary" : "ghost"}
          onClick={onFilterClick}
          className="whitespace-nowrap"
        >
          <Sparkles className="h-4 w-4" />
          Filtrar por vagas
        </Button>

        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <input
            type="search"
            className={cn(
              "flex h-10 w-full rounded-full border border-zinc-500 bg-black py-2 pl-10 pr-3 text-sm text-zinc-50 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    )
  }
)
SearchBar.displayName = "SearchBar"

export { SearchBar }