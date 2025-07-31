import * as React from "react";
import { Search, Sparkles, UsersRound, X } from "lucide-react";

import { cn } from "@/lib/utils";
import Button from "./Button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import Select from "./select";
import Input from "./input";
import { courseOptions } from "@/constants/courses";

export interface SearchBarProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  filterActive: "opportunities" | "students" | null;
  regime: string;
  setRegime: (value: string) => void;
  salary: string;
  setSalary: (value: string) => void;
  workload: string;
  setWorkload: (value: string) => void;
  onFilterOpportunities: () => void;
  onClearOpportunities: () => void;
  course: string;
  setCourse: (value: string) => void;
  entrySemester: string;
  setEntrySemester: (value: string) => void;
  onFilterStudents: () => void;
  onClearStudents: () => void;
  containerClassName?: string;
}

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      className,
      filterActive,
      regime = "",
      setRegime = () => {},
      salary = "",
      setSalary = () => {},
      workload = "",
      setWorkload = () => {},
      onFilterOpportunities,
      onClearOpportunities,
      course = "",
      setCourse = () => {},
      entrySemester = "",
      setEntrySemester = () => {},
      onFilterStudents,
      onClearStudents,
      containerClassName,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
      const syntheticEvent = {
        ...e,
        target:
          ref && typeof ref !== "function" && ref.current
            ? ref.current
            : e.target,
      } as unknown as React.ChangeEvent<HTMLInputElement>;

      syntheticEvent.target.value = "";

      if (onChange) {
        onChange(syntheticEvent);
      }
    };

    return (
      <div className={cn("flex items-center gap-3 w-full", containerClassName)}>
        <div className="inline-flex justify-start items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={
                  filterActive === null
                    ? "outline_white"
                    : filterActive === "opportunities"
                    ? "primary"
                    : "disabled"
                }
                className="whitespace-nowrap h-10"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Filtrar por vagas
              </Button>
            </PopoverTrigger>
            <PopoverContent side="bottom" align="start" sideOffset={10}>
              <>
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="flex-1 min-w-16 justify-start text-violet-50 text-sm font-semibold font-['Inter'] leading-snug">
                      Filtrar vagas
                    </div>
                  </div>
                  <Select
                    id="regime"
                    name="regime"
                    label="Regime"
                    placeholder="Selecione o regime da vaga"
                    value={regime}
                    options={[
                      { value: "remote", label: "Remoto" },
                      { value: "hybrid", label: "Híbrido" },
                      { value: "in-person", label: "Presencial" },
                    ]}
                    onChange={(e) => setRegime(e.target.value)}
                    status="default"
                    errorMessage=""
                  />

                  <Input
                    id="salary"
                    name="salary"
                    label="Salário ou bolsa"
                    placeholder="Salário ou bolsa"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    status="default"
                    errorMessage=""
                  />

                  <Input
                    id="workload"
                    name="workload"
                    label="Carga horária"
                    placeholder="Carga horária"
                    value={workload}
                    onChange={(e) => setWorkload(e.target.value)}
                    status="default"
                    errorMessage=""
                  />
                </div>

                <div className="w-full self-stretch pt-4 inline-flex justify-between items-center">
                  <Button
                    variant="outline_white"
                    onClick={onClearOpportunities}
                  >
                    Limpar
                  </Button>
                  <Button variant="primary" onClick={onFilterOpportunities}>
                    Aplicar
                  </Button>
                </div>
              </>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={
                  filterActive === null
                    ? "outline_white"
                    : filterActive === "students"
                    ? "primary"
                    : "disabled"
                }
                className="whitespace-nowrap h-10"
              >
                <UsersRound className="h-4 w-4 mr-2" />
                Filtrar por alunos
              </Button>
            </PopoverTrigger>
            <PopoverContent side="bottom" align="start" sideOffset={10}>
              <>
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="flex-1 min-w-16 justify-start text-violet-50 text-sm font-semibold font-['Inter'] leading-snug">
                      Filtrar alunos
                    </div>
                  </div>
                  <Select
                    id="course"
                    name="course"
                    label="Curso"
                    placeholder="Curso"
                    value={course}
                    options={courseOptions}
                    onChange={(e) => setCourse(e.target.value)}
                    status="default"
                    errorMessage=""
                  />

                  <Input
                    id="entrySemester"
                    name="entrySemester"
                    label="Semestre de ingresso"
                    placeholder="Semestre de ingresso"
                    value={entrySemester}
                    onChange={(e) => setEntrySemester(e.target.value)}
                    status="default"
                    errorMessage=""
                  />
                </div>

                <div className="w-full self-stretch pt-4 inline-flex justify-between items-center">
                  <Button variant="outline_white" onClick={onClearStudents}>
                    Limpar
                  </Button>
                  <Button variant="primary" onClick={onFilterStudents}>
                    Aplicar
                  </Button>
                </div>
              </>
            </PopoverContent>
          </Popover>
        </div>

        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 h-4 w-5 -translate-y-1/2 text-zinc-400" />
          <input
            ref={ref}
            type="text"
            value={value}
            onChange={onChange}
            className={cn(
              "flex h-10 w-full rounded-full border border-zinc-600 bg-black py-2 pl-10 pr-10 text-sm text-zinc-50 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-400 disabled:cursor-not-allowed disabled:opacity-50",
              "hover:border-zinc-500 transition-all duration-300",
              "focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50",
              className
            )}
            {...props}
          />
          {value && <Button variant="text" Icon={X} onClick={handleClear} />}
        </div>
      </div>
    );
  }
);
SearchBar.displayName = "SearchBar";

export { SearchBar };
