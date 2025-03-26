import { prisma } from '@/prisma/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('query') || '';

  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: query,
        // убираем чувствительность к регистру
        mode: 'insensitive',
      },
    },
    take: 5,
  });
  return NextResponse.json(products);
}
