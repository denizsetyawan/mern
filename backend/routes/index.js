import express from "express";
import {
    getAllProducts,
    createProduct, getProductById, updateProduct
} from "../controllers/Products.js";

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.patch('/:id', updateProduct);

export default router;
