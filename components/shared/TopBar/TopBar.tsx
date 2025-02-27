import { Categories } from '@/components/shared/TopBar/Categories';
import { Sort } from '@/components/shared/TopBar/Sort';
import { Container } from '@/components/shared/Container';

export function TopBar() {
  return (
    <div className="sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10">
      <Container className="flex items-center justify-between flex-wrap gap-5">
        <Categories />
        <Sort />
      </Container>
    </div>
  );
}
