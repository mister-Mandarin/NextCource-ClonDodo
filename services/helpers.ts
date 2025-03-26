import axios from 'axios';
import * as products from './searchProducts';
import * as ingredients from './getIngredientsList';

export const Api = {
  products,
  ingredients,
};

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// указываем маршруты в api на запросы route.ts
export enum ApiRoutes {
  SEARCH_PRODUCTS = '/products/search',
  GET_INGREDIENTS = '/ingredients',
}
