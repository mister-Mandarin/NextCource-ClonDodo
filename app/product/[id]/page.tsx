import React, { Suspense } from 'react';
import { Container } from '@/components/shared';

type Params = Promise<{ id: string[] }>;

export default async function Product({ params }: { params: Params }) {
  const { id } = await params;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <div>Product {id}</div>
      </Container>
    </Suspense>
  );
}
