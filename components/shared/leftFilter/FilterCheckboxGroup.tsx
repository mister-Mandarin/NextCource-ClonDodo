'use client';
import { FilterCheckbox } from '@/components/shared/leftFilter/FilterCheckbox';
import { Input } from '@/components/ui';
import { CheckboxFiltersProps } from '@/components/shared/leftFilter/helper';
import { useState } from 'react';

export function FilterCheckboxGroup({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  onChange,
  defaultValues,
  className,
}: CheckboxFiltersProps) {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const list = showAll
    ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
    : items.slice(0, limit);

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  return (
    <div className="className">
      <p className="font-bold mb-5">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            onChange={handleSearchChange}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-y-auto scrollbar">
        {list.map((item) => (
          <FilterCheckbox
            key={String(item.value)}
            text={item.text}
            value={item.value}
            onCheckedChange={() => console.log(item.value)}
            checked={false}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
            {showAll ? 'Скрыть' : '+ Показать всё'}
          </button>
        </div>
      )}
    </div>
  );
}
