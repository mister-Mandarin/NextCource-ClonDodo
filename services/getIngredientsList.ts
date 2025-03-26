import { ApiRoutes, axiosInstance } from '@/services/helpers';
import { Ingredient } from '@prisma/client';

export async function getIngredientsList(): Promise<Ingredient[]> {
  const ingredients = await axiosInstance.get<Ingredient[]>(ApiRoutes.GET_INGREDIENTS);
  return ingredients.data;
}
