import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Product } from '@prisma/client';

interface Props {
  focused: boolean;
  searchResults: Product[];
  onProductClick: () => void;
}

export default function HeaderSearchResults({ focused, searchResults, onProductClick }: Props) {
  return (
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
  );
}
