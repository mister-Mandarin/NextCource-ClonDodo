'use client';
import { Search } from 'lucide-react';
import { useRef, useState } from 'react';
import { useClickAway, useDebounce } from 'react-use';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Api } from '@/services/api';
import { Product } from '@prisma/client';

export default function HeaderSearch() {
  const [focused, setFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    () => {
      Api.products.searchProducts(searchQuery).then((data) => {
        setSearchResults(data);
      });
    },
    300,
    [searchQuery],
  );

  function onProductClick() {
    setFocused(false);
    setSearchQuery('');
  }

  return (
    <>
      <div className="mx-10 flex-1">
        {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />}

        <div ref={ref} className="flex rounded-2xl flex-1 justify-between relative h-11 z-30">
          <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
          <input
            className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
            type="text"
            placeholder="Найти пиццу..."
            onFocus={() => setFocused(true)}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {searchResults.length > 0 && (
            <div
              className={cn(
                'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
                focused && 'visible opacity-100 top-12',
              )}>
              {searchResults.map((product) => (
                <Link
                  onClick={onProductClick}
                  key={product.id}
                  className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
                  href={`/product/${product.id}`}>
                  <img className="rounded-sm h-8 w-8" src={product.imageUrl} alt={product.name} />
                  <span>{product.name}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
