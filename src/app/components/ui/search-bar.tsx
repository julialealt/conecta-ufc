// components/ui/SearchBar.tsx
import * as React from "react"
// Adicionamos o ícone 'X' para o nosso botão de limpar customizado
import { Search, Sparkles, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "./button"

export interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onFilterClick: () => void
  isFilterActive?: boolean
  containerClassName?: string
}

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, onFilterClick, isFilterActive = false, containerClassName, value, onChange, ...props }, ref) => {

    const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
      const syntheticEvent = {
        ...e,
        target: ref && typeof ref !== 'function' && ref.current ? ref.current : e.target,
      } as unknown as React.ChangeEvent<HTMLInputElement>;

      syntheticEvent.target.value = '';

      if (onChange) {
        onChange(syntheticEvent);
      }
    }

    return (
      <div className={cn("flex items-center gap-x-2 w-full", containerClassName)}>
        <Button
          variant={isFilterActive ? "primary" : "ghost"}
          onClick={onFilterClick}
          className="whitespace-nowrap"
        >
          <Sparkles className="h-4 w-4 mr-2" />
          Filtrar por vagas
        </Button>

        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 h-4 w-5 -translate-y-1/2 text-zinc-400" />
          <input
            ref={ref}
            type="text"
            value={value}
            onChange={onChange}
            className={cn(
              "flex h-10 w-full rounded-full border border-zinc-600 bg-black py-2 pl-10 pr-10 text-sm text-zinc-50 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-400 disabled:cursor-not-allowed disabled:opacity-50",
              "hover:border-zinc-500 transition-colors",
              "focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50",
              className
            )}
            {...props}
          />
          {value && (
            <Button variant="text" Icon={X} onClick={handleClear} />
          )}
        </div>
      </div>
    )
  }
)
SearchBar.displayName = "SearchBar"

export { SearchBar }