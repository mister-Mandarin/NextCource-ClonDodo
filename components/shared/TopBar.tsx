import { Categories } from '@/components/shared/Categories';
import { Sort } from '@/components/shared/Sort';
import { Container } from '@/components/shared/Container';

export function TopBar() {
  return (
    <div className="sticky top-0 bg-white py-5 shadow-lg shadow-black/5">
      <Container className="flex items-center justify-between flex-wrap gap-5">
        <Categories />
        <Sort />
      </Container>
    </div>
  );
}
