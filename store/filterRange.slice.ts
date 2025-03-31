import { StateCreator } from 'zustand';
import { PriceValue } from '@/store/filter';
import { DodoStore } from '@/store/store';
import { rename } from 'fs';

export interface FilterRangeProps {
  priceFrom: number;
  priceTo: number;
  changePrice: (name: string, value: number) => void;
}

export const createFilterRangeSlice: StateCreator<DodoStore, [['zustand/devtools', never]], [], FilterRangeProps> = (
  set,
) => ({
  priceFrom: PriceValue.PRICE_FROM,
  priceTo: PriceValue.PRICE_TO,
  changePrice: (name, value) =>
    set(
      (state) => ({
        ...state,
        [name]: value,
      }),
      undefined,
      'filterRange/changePrice',
    ),
});
