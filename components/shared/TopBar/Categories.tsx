'use client';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

const categories = [
  { id: 1, name: 'Пиццы' },
  { id: 2, name: 'Комбо' },
  { id: 3, name: 'Закуски' },
  { id: 4, name: 'Коктейли' },
  { id: 5, name: 'Кофе' },
  { id: 6, name: 'Напитки' },
  { id: 7, name: 'Десерты' },
];

export function Categories() {
  const activeCategoryId = useCategoryStore((state) => state.activeId);
  return (
    <div className={cn('inline-flex flex-wrap gap-1 bg-gray-50 p-1 rounded-2xl')}>
      {categories.map((category) => (
        <a
          key={category.id}
          href={`/#${category.name}`}
          className={cn(
            'flex items-center font-bold h-11 px-5 rounded-2xl hover:bg-white hover:shadow-md hover:shadow-gray-200',
            category.id === activeCategoryId && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}>
          {category.name}
        </a>
      ))}
    </div>
  );
}
