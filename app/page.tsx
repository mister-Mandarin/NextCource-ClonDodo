import { Container, Filters, TopBar } from '@/components/shared';
import { Title } from '@/components/ui';
import { ProductCard } from '@/components/shared/Products/ProductCard';
import { ProductsList } from '@/components/shared/Products/ProductsList';

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
          <div className="flex flex-col gap-16">
            <ProductsList
              title="Все пиццы"
              categoryId={1}
              items={[
                {
                  id: 1,
                  name: 'Классическая',
                  imageUrl: 'https://media.dodostatic.net/image/r:233x233/11ef9a30c3246adebecb726548cbede9.avif',
                  price: 990,
                  items: [{ price: 990 }],
                },
                {
                  id: 2,
                  name: 'Классическая',
                  imageUrl: 'https://media.dodostatic.net/image/r:233x233/11ef9a30c3246adebecb726548cbede9.avif',
                  price: 990,
                  items: [{ price: 990 }],
                },
                {
                  id: 3,
                  name: 'Классическая',
                  imageUrl: 'https://media.dodostatic.net/image/r:233x233/11ef9a30c3246adebecb726548cbede9.avif',
                  price: 990,
                  items: [{ price: 990 }],
                },
                {
                  id: 4,
                  name: 'Классическая',
                  imageUrl: 'https://media.dodostatic.net/image/r:233x233/11ef9a30c3246adebecb726548cbede9.avif',
                  price: 990,
                  items: [{ price: 990 }],
                },
                {
                  id: 5,
                  name: 'Классическая',
                  imageUrl: 'https://media.dodostatic.net/image/r:233x233/11ef9a30c3246adebecb726548cbede9.avif',
                  price: 990,
                  items: [{ price: 990 }],
                },
                {
                  id: 6,
                  name: 'Классическая',
                  imageUrl: 'https://media.dodostatic.net/image/r:233x233/11ef9a30c3246adebecb726548cbede9.avif',
                  price: 990,
                  items: [{ price: 990 }],
                },
              ]}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
