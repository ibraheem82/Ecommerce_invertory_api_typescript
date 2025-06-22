import { TProduct } from "./product.interface";
import { Product } from "./product.model";

// Takes productData as an input.
// Ensures productData matches the TProduct structure using TypeScript.
const createAProductIntoDB = async (productData: TProduct) => {
    const result = await Product.create(productData);
    return result;
};

const getProductsFromDB = async (searchTerm = "") => {
  const query = searchTerm
    ? {
        $or: [
          { name: { $regex: searchTerm, $options: "i" } },
          { description: { $regex: searchTerm, $options: "i" } },
          { category: { $regex: searchTerm, $options: "i" } },
          { tags: { $in: [new RegExp(searchTerm, "i")] } }, // Correctly searches array
          { "variants.value": { $regex: searchTerm, $options: "i" } }
        ]
      }
    : {};

  const data = await Product.find(query);
  return data;
};

export const ProductServices = {
    createAProductIntoDB,
    getProductsFromDB,
    // getSingleProductFromDB,
    // updateProductIntoDB,
    // deleteProductFromDB
}