import { Input, RangeSlider, Title } from '@/components/ui';
import { FilterCheckbox, FilterCheckboxGroup } from '@/components/shared';
import FilterRange from '@/components/shared/leftFilter/FilterRange';

export function Filters() {
  return (
    <div>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox name="main" text="Можно собрать" value="1" />
        <FilterCheckbox name="main" text="Новинка" value="2" />
      </div>
      <FilterRange />
      <FilterCheckboxGroup title="Ингридиенты:" name="ingredients" />
    </div>
  );
}
