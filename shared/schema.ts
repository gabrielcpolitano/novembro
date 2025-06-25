import { z } from 'zod'

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  image: z.string(),
  category: z.enum(['chocolate', 'frutas', 'casamento', 'aniversario', 'gourmet']),
  inStock: z.boolean()
})

export type Product = z.infer<typeof ProductSchema>

export const OrderSchema = z.object({
  id: z.string(),
  customerName: z.string(),
  customerEmail: z.string(),
  customerPhone: z.string(),
  items: z.array(z.object({
    productId: z.string(),
    quantity: z.number(),
    price: z.number()
  })),
  total: z.number(),
  status: z.enum(['pending', 'confirmed', 'preparing', 'ready', 'delivered']),
  createdAt: z.date()
})

export type Order = z.infer<typeof OrderSchema>