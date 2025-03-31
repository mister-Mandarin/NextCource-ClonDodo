import { StateCreator } from 'zustand';
import { DodoStore } from '@/store/store';

export interface CategoryProps {
  activeId: number;
  setActiveId: (id: number) => void;
}

export const createCategorySlice: StateCreator<DodoStore, [['zustand/devtools', never]], [], CategoryProps> = (
  set,
) => ({
  activeId: 1,
  setActiveId: (activeId: number) => set({ activeId }, undefined, 'category/setActiveId'),
});
