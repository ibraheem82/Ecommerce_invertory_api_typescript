import { Product } from "./product.model";
// Takes productData as an input.
// Ensures productData matches the TProduct structure using TypeScript.
const createAProductIntoDB = async (productData) => {
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
const getSingleProductFromDB = async (id) => {
    const result = await Product.findById(id);
    return result;
};
const updateProductIntoDB = async (productId, data) => {
    const result = await Product.findByIdAndUpdate(productId, data, { new: true });
    return result;
};
const deleteProductFromDB = async (productId) => {
    const result = await Product.findByIdAndDelete(productId);
    return result;
};
export const ProductServices = {
    createAProductIntoDB,
    getProductsFromDB,
    getSingleProductFromDB,
    updateProductIntoDB,
    deleteProductFromDB
};
