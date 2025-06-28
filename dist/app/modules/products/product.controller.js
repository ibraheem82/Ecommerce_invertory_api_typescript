import productValidationSchema from "./product.validation";
import { ProductServices } from "./product.services";
const createProduct = async (req, res) => {
    try {
        const zodParser = productValidationSchema.parse(req.body);
        const result = await ProductServices.createAProductIntoDB(zodParser);
        res.status(200).json({
            success: true,
            message: "Product created successfully",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong",
            error: err
        });
    }
};
const getAllProducts = async (req, res) => {
    const { searchTerm } = req.query;
    const result = await ProductServices.getProductsFromDB(searchTerm);
    res.status(200).json({
        success: true,
        message: "Products fetched successfully",
        data: result
    });
};
const getSingleProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const result = await ProductServices.getSingleProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: "Single Product fetched successfully",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong",
            error: err
        });
    }
};
const updateProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const data = req.body;
        const result = await ProductServices.updateProductIntoDB(productId, data);
        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong",
            error: err
        });
    }
};
const deleteProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        await ProductServices.deleteProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: null
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong",
            error: err
        });
    }
};
export const ProductControllers = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
};
