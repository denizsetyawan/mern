import Product from "../models/productModel.js";

//menampilkan semua product
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

//menampilkan 1 product
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(product[0]);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

//menambah product
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

//update product
export const updateProduct = async (req, res) => {
    try {
        await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product updated"
        });
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}
