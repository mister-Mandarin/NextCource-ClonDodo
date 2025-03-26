import { ApiRoutes, axiosInstance } from '@/services/helpers';
import { Product } from '@prisma/client';

export async function searchProducts(query: string): Promise<Product[]> {
  const searchResults = await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, { params: { query } });

  return searchResults.data;
}
