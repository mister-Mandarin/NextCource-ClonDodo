import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { CategoryProps, createCategorySlice } from '@/store/category.slice';
import { createFilterRangeSlice, FilterRangeProps } from '@/store/filterRange.slice';

// https://zustand.docs.pmnd.rs/middlewares/devtools#devtools(statecreatorfn,-devtoolsoptions)
export type DodoStore = CategoryProps & FilterRangeProps;

export const usePizzaStore = create<DodoStore>()(
  devtools((...args) => ({
    ...createCategorySlice(...args),
    ...createFilterRangeSlice(...args),
  })),
);
