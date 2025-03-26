import { cn } from '@/lib/utils';
import { Container } from '@/components/shared/Container';
import HeaderLogo from '@/components/shared/Header/HeaderLogo';
import HeaderSearch from '@/components/shared/Header/HeaderSearch';
import HeaderButtons from '@/components/shared/Header/HeaderButtons';

interface Props {
  className?: string;
}

export function Header({ className }: Props) {
  return (
    <header className={cn('border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        <HeaderLogo />
        <HeaderSearch />
        <HeaderButtons />
      </Container>
    </header>
  );
}
