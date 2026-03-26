import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  price: z.number().positive("Price must be positive"),
  stock: z.number().int().nonnegative("Stock must be non-negative").default(0),
  category: z.string().optional(),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;
