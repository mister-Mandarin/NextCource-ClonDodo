import { Input, RangeSlider, Title } from '@/components/ui';
import { FilterCheckboxGroup, FilterCheckbox } from '@/components/shared';
import { ITEMS } from '@/components/shared/leftFilter/helper';

export function Filters() {
  return (
    <div>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собрать" value="1" />
        <FilterCheckbox text="Новинка" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={2000} defaultValue={0} />
          <Input type="number" min={100} max={2000} placeholder="2000" />
        </div>
        <RangeSlider min={0} max={2000} step={10} value={[0, 2000]} />
      </div>

      <FilterCheckboxGroup title="Ингридиенты:" className="mt-5" items={ITEMS} />
    </div>
  );
}
