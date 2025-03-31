import { create } from 'zustand';
import { Api } from '@/services/helpers';
import { Ingredient } from '@prisma/client';

export enum PriceValue {
  PRICE_FROM = 0,
  PRICE_TO = 1000,
}

export interface FilterCheckboxGroupProps {
  selectedIngredients: Set<string>;
  ingredients: Ingredient[];
  searchValue: string;
  showAll: boolean;
  toggleIngredient: (id: string) => void;
  setSearchValue: (value: string) => void;
  setShowAll: (value: boolean) => void;
  loadIngredients: () => Promise<void>;
}

export const useFilterStore = create<FilterProps>((set) => ({
  // FilterCheckboxGroup
  selectedIngredients: new Set<string>(),
  ingredients: [],
  searchValue: '',
  showAll: false,

  // toggleIngredient: (id) => {
  //   const next = new Set(get().selectedIngredients);
  //   next.has(id) ? next.delete(id) : next.add(id);
  //   set({ selectedIngredients: next });
  // },
  //setIngredients: (value) => set({ ingredients: value }),
  setSearchValue: (value) => set({ searchValue: value }),
  setShowAll: (value) => set({ showAll: value }),

  loadIngredients: async () => {
    Api.ingredients
      .getIngredientsList()
      .then((data) => set({ ingredients: data }))
      .catch((error) => console.error(error));
  },
}));
