import { Square, SquareCheck } from 'lucide-react'
import React from 'react'

export interface CheckboxProps {
  label?: string
  checked?: boolean
  disabled?: boolean
  onChange?: () => void
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked = false, disabled = false, onChange }) => {

  return (
    <div className="w-full inline-flex flex-col justify-start items-start gap-1.5">
      <div
        className="py-1 rounded-lg inline-flex justify-start items-center gap-2 overflow-hidden cursor-pointer"
        onClick={(e) => {
          e.stopPropagation()
          if (!disabled && onChange) {
            onChange()
          }
        }}
      >
        {checked ? (
          <SquareCheck className="w-4 h-4 text-violet-500" />
        ) : (
          <Square className="w-4 h-4 text-zinc-400" />
        )}
        <div className="justify-start text-zinc-400 text-sm font-normal leading-[150%]">{label}</div>
      </div>
    </div>
  );
};

export default Checkbox;
