'use client';
import { Title } from '@/components/ui';
import { ProductCard } from '@/components/shared/Products/ProductCard';
import { cn } from '@/lib/utils';
import { useIntersection } from 'react-use';
import React, { useEffect } from 'react';
import { useCategoryStore } from '@/store/category';

interface Props {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export function ProductsList({ title, items, className, listClassName, categoryId }: Props) {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef<HTMLDivElement>(null!);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log('visible', title, categoryId);
      setActiveCategoryId(categoryId);
    }
  });

  return (
    <div className={className} id={`${title}`} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn('grid grid-cols-2 gap-[50px] md:grid-cols-3', listClassName)}>
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
