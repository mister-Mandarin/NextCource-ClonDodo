import { cn } from '@/lib/utils';
import { Sort } from '@/components/shared/Sort';

const categories = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты'];
const activeIndex = 0;

export function Categories() {
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl')}>
      {categories.map((name, index) => (
        <a
          key={name}
          className={cn(
            'flex items-center font-bold h-11 px-5 rounded-2xl',
            index === activeIndex && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}>
          {name}
        </a>
      ))}
    </div>
  );
}
