// https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding
import { PrismaClient } from '@prisma/client';
import {
  CART,
  CART_ITEM,
  CATEGORIES,
  generateProductVariant,
  INGREDIENTS,
  PIZZAS_DATA,
  PRODUCTS,
  USERS,
} from './helpers';

const prisma = new PrismaClient();

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.error(error);
  }
}

async function up() {
  await prisma.user.createMany({
    data: USERS,
  });

  await prisma.category.createMany({
    data: CATEGORIES,
  });

  await prisma.ingredient.createMany({
    data: INGREDIENTS,
  });

  await prisma.product.createMany({
    data: PRODUCTS,
  });

  const pizza1 = await prisma.product.create({
    data: PIZZAS_DATA[0],
  });

  const pizza2 = await prisma.product.create({
    data: PIZZAS_DATA[1],
  });

  const pizza3 = await prisma.product.create({
    data: PIZZAS_DATA[2],
  });

  await prisma.productVariant.createMany({
    data: [
      // Пицца "Пепперони фреш"
      generateProductVariant({ productId: pizza1.id, pizzaType: 1, size: 20 }),
      generateProductVariant({ productId: pizza1.id, pizzaType: 2, size: 30 }),
      generateProductVariant({ productId: pizza1.id, pizzaType: 2, size: 40 }),

      // Пицца "Сырная"
      generateProductVariant({ productId: pizza2.id, pizzaType: 1, size: 20 }),
      generateProductVariant({ productId: pizza2.id, pizzaType: 1, size: 30 }),
      generateProductVariant({ productId: pizza2.id, pizzaType: 1, size: 40 }),
      generateProductVariant({ productId: pizza2.id, pizzaType: 2, size: 20 }),
      generateProductVariant({ productId: pizza2.id, pizzaType: 2, size: 30 }),
      generateProductVariant({ productId: pizza2.id, pizzaType: 2, size: 40 }),

      // Пицца "Чоризо фреш"
      generateProductVariant({ productId: pizza3.id, pizzaType: 1, size: 20 }),
      generateProductVariant({ productId: pizza3.id, pizzaType: 2, size: 30 }),
      generateProductVariant({ productId: pizza3.id, pizzaType: 2, size: 40 }),

      // Остальные продукты
      generateProductVariant({ productId: 1 }),
      generateProductVariant({ productId: 2 }),
      generateProductVariant({ productId: 3 }),
      generateProductVariant({ productId: 4 }),
      generateProductVariant({ productId: 5 }),
      generateProductVariant({ productId: 6 }),
      generateProductVariant({ productId: 7 }),
      generateProductVariant({ productId: 8 }),
      generateProductVariant({ productId: 9 }),
      generateProductVariant({ productId: 10 }),
      generateProductVariant({ productId: 11 }),
      generateProductVariant({ productId: 12 }),
      generateProductVariant({ productId: 13 }),
      generateProductVariant({ productId: 14 }),
      generateProductVariant({ productId: 15 }),
      generateProductVariant({ productId: 16 }),
      generateProductVariant({ productId: 17 }),
    ],
  });

  await prisma.cart.createMany({
    data: CART,
  });

  await prisma.cartItem.create({
    data: CART_ITEM,
  });
}

async function down() {
  // SQL запрос на удаление всех данных в таблицах и обнуление id
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductVariant" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
