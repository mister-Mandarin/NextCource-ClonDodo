'use client';
import { FilterCheckbox } from '@/components/shared/leftFilter/FilterCheckbox';
import { Input } from '@/components/ui';
import { CheckboxFiltersProps } from '@/components/shared/leftFilter/helper';
import { useEffect, useMemo } from 'react';
import { X as Cancel } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FilterCheckboxGroupProps, useFilterStore } from '@/store/filter';

export function FilterCheckboxGroup({
  title,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  name = '',
}: CheckboxFiltersProps) {
  const { showAll, setShowAll, searchValue, setSearchValue, ingredients, loadIngredients } =
    useFilterStore() as FilterCheckboxGroupProps;

  useEffect(() => {
    loadIngredients();
  }, []);

  const items = useMemo(
    () =>
      ingredients.map((ingredient) => ({
        value: String(ingredient.id),
        text: ingredient.name,
      })),
    [ingredients],
  );

  const list = useMemo(() => {
    const filtered = items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()));
    return showAll ? filtered : filtered.slice(0, limit);
  }, [showAll, searchValue, items]);

  // console.log('selectedIngredients: ', selectedIngredients);
  return (
    <div className="mt-5">
      <p className="font-bold mb-5">{title}</p>

      <div className="mb-5 relative">
        <Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={searchInputPlaceholder}
          className="bg-gray-50 border-none"
        />
        <Cancel
          onClick={() => setSearchValue('')}
          className={cn(
            'absolute cursor-pointer top-1/2 translate-y-[-50%] right-3 h-5 text-gray-400 transition-all duration-500 invisible opacity-0',
            searchValue.length > 0 && 'opacity-100 visible',
          )}
        />
      </div>

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-y-auto scrollbar">
        {list.map((item) => (
          <FilterCheckbox
            name={name}
            key={item.value}
            text={item.text}
            value={item.value}
            //onCheckedChange={() => toggleIngredient(item.value)}
            // Хз зачем это, не понимаю. И так все работает.
            //checked={selectedIngredients?.has(item.value)}
          />
        ))}
        {list.length === 0 && (
          <div className="text-gray-400 text-sm py-2">
            {searchValue.trim() ? `Ничего не найдено по запросу "${searchValue}"` : 'Загрузка данных...'}
          </div>
        )}
      </div>

      {items.length > limit && (
        <div className={'border-t border-t-neutral-100 mt-4'}>
          <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
            {showAll ? 'Скрыть' : '+ Показать всё'}
          </button>
        </div>
      )}
    </div>
  );
}
