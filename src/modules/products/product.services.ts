import { TProduct } from "./product.interface";
import { Product } from "./product.model";

// Takes productData as an input.
// Ensures productData matches the TProduct structure using TypeScript.
const createAProductIntoDB = async (productData: TProduct) => {
    const result = await Product.create(productData);
    return result;
};




export const ProductServices = {
    createAProductIntoDB
    // getProductsFromDB,
    // getSingleProductFromDB,
    // updateProductIntoDB,
    // deleteProductFromDB
}