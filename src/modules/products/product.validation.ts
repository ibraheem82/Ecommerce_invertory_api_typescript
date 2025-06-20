import { z } from "zod";

export const variantValidationSchema = z.object({
    type: z.string(),
    value: z.string(),
  });
export const inventoryValidationSchema = z.object({
    // Adds a constraint that the number must be greater than or equal to 0.
    quantity: z.number().min(0),
    inStock: z.boolean(),
  });


const productValidationSchema = z.object({
  name: z.string({
    required_error: "Name of Product is required",
    invalid_type_error: "Name must be a string",
  }),

  description: z.string(),

  // price -> Positive number > 0
  price: z.number().positive(),
  category: z.string(),
// Array of string z.array() validates arrays 
  tags: z.array(z.string()),
  variants: z.array(variantValidationSchema),
  inventory: inventoryValidationSchema
});

export default productValidationSchema;