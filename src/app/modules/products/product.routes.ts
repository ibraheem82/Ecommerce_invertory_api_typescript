import express from "express";
import { ProductControllers } from "./product.controller";
import { verfiyToken } from "../../middleware/authMiddleware";
import { isAdmin } from "../../middleware/adminMiddleware";
const router = express.Router();

router.post('/', verfiyToken, isAdmin, ProductControllers.createProduct)
router.get('/', ProductControllers.getAllProducts)
router.get("/:productId",ProductControllers.getSingleProduct)
router.put("/:productId", verfiyToken, ProductControllers.updateProduct)
router.delete("/:productId", verfiyToken, isAdmin, ProductControllers.deleteProduct)


export const ProductRoutes = router;