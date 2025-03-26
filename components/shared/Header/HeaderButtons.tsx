import React from 'react';
import { Button } from '@/components/ui';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';

export default function HeaderButtons() {
  return (
    <div className="flex items-center gap-3">
      <Button variant="outline" className="flex items-center gap-1">
        <User size={16} />
        Войти
      </Button>
      <Button className="group relative">
        <b>599 ₽</b>
        <span className="h-full w-[1px] bg-white/30 mx-3" />
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart size={16} className="relative" strokeWidth={2} />
          <b>3</b>
        </div>
        <ArrowRight
          className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0
              group-hover:opacity-100 group-hover:translate-x-0"
        />
      </Button>
    </div>
  );
}
