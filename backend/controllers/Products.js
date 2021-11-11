import Product from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const createProduct = async (req, res) => {
    try {
        await Product.create(req.body);
        res.json({
            "message": "Product created"
        });
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}
