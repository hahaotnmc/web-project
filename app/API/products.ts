import { PrismaClient } from "@prisma/client";
import { Cart } from "./carts";

export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    createdAt: Date;
    cart: Cart[];
};
export async function getProducts() {
  const prisma = new PrismaClient();
  const products = await prisma.product.findMany();
  return products as Product[];
}

 
  