import React from 'react';
import Link from 'next/link';
import { Button, Title } from '@/components/ui';
import { Plus } from 'lucide-react';
import Image from 'next/image';

interface Props {
  name: string;
  price: number;
  count?: number;
  imageUrl: string;
  className?: string;
}

export function ProductCard({ name, price, count, imageUrl }: Props) {
  return (
    <div>
      <Link href="/product/1">
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="max-w-[215px] max-h-[215px]" src={imageUrl} alt={name} />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
          Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
          </span>

          <Button variant="secondary">
            <Plus size={16} className="mr-1" />
            Добавить
          </Button>
          {/*  )}*/}
          {/*{count ? (*/}
          {/*  <CountButton value={count} size="lg" />*/}
          {/*) : (*/}
          {/* */}
        </div>
      </Link>
    </div>
  );
}
