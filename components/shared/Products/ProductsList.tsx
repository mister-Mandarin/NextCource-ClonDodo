import React from 'react';
import { Title } from '@/components/ui';
import { ProductCard } from '@/components/shared/Products/ProductCard';
import { cn } from '@/lib/utils';

interface Props {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export function ProductsList({ title, items, className, listClassName, categoryId }: Props) {
  return (
    <div className={className}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((item, i) => (
          <ProductCard
            key={item.id}
            //id={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.items[0].price}
            //count={i % 2}
          />
        ))}
      </div>
    </div>
  );
}
