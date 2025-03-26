import React from 'react';
import { Container } from '@/components/shared';

export default function Product({ params }: Readonly<{ params: { id: string } }>) {
  return <Container>{params.id}</Container>;
}
