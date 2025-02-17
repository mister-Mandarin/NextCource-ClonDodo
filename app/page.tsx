import { Container, Filters, TopBar } from '@/components/shared';
import { Title } from '@/components/ui';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className=" mt-10 pb-14 flex gap-[60px]">
        <div className="w-[250px]">
          <Filters />
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-16">list tovarov</div>
        </div>
      </Container>
    </>
  );
}
