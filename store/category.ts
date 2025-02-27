import { create } from 'zustand';

interface CategoryProps {
  activeId: number;
  setActiveId: (id: number) => void;
}

export const useCategoryStore = create<CategoryProps>((set) => ({
  activeId: 1,
  setActiveId: (activeId: number) => set({ activeId }),
}));
