import { Checkbox } from '@/components/ui';
import { FilterCheckboxProps } from '@/components/shared/leftFilter/helper';

export function FilterCheckbox({ text, name, value, endAdornment, onCheckedChange, checked }: FilterCheckboxProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        //checked={checked}
        value={value}
        className="rounded-[8px] w-6 h-6"
        id={`checkbox-${name}-${String(value)}`}
      />
      <label htmlFor={`checkbox-${name}-${String(value)}`} className="leading-none cursor-pointer flex-1">
        {text}
      </label>
      {endAdornment}
    </div>
  );
}
