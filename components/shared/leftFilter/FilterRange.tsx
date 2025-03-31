'use client';
import { Input, RangeSlider } from '@/components/ui';
import { PriceValue } from '@/store/filter';
import { usePizzaStore } from '@/store/store';
import { FilterRangeProps } from '@/store/filterRange.slice';

export default function FilterRange() {
  const { priceFrom, priceTo, changePrice } = usePizzaStore() as FilterRangeProps;

  return (
    <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
      <p className="font-bold mb-3">Цена от и до:</p>
      <div className="flex gap-3 mb-5">
        <Input
          type="number"
          placeholder={String(PriceValue.PRICE_FROM)}
          min={0}
          max={PriceValue.PRICE_TO}
          value={String(priceFrom)}
          onChange={(e) => changePrice('priceFrom', Number(e.target.value))}
        />
        <Input
          type="number"
          placeholder={String(PriceValue.PRICE_TO)}
          min={100}
          max={PriceValue.PRICE_TO}
          value={String(priceTo)}
          onChange={(e) => changePrice('priceTo', Number(e.target.value))}
        />
      </div>
      <RangeSlider
        min={PriceValue.PRICE_FROM}
        max={PriceValue.PRICE_TO}
        step={10}
        value={[priceFrom, priceTo]}
        onValueChange={([priceFrom, priceTo]) => {
          changePrice('priceFrom', priceFrom);
          changePrice('priceTo', priceTo);
        }}
      />
    </div>
  );
}
