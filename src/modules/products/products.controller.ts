import { Request, Response } from "express";
import prisma from "../../config/prisma";
import { createProductSchema } from "./product.schema";

export async function createProduct(req: Request, res: Response): Promise<void> {
  try {
    const parsed = createProductSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ errors: parsed.error.errors });
      return;
    }

    const product = await prisma.product.create({ data: parsed.data });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function listProducts(req: Request, res: Response): Promise<void> {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
