const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');
const express = require('express');
const router = express.Router();

// @desc Fetch all products or specific number of products
// @route GET /api/products/ or /api/products/?qty=1
// @access Public
router.get('/', asyncHandler(async (req, res) =>{
    const qty = Number(req.query.qty) || Number.MAX_SAFE_INTEGER;

    const products = await Product.aggregate([{ $sample: { size: qty } }]);
    
    res.status(200).json(products);
}));

// @desc Fetch a single product by id
// @route GET /api/products/:id
// @access Public
router.get('/:id', asyncHandler(async (req, res) =>{
    const productID = req.params.id;

    const product = await Product.findOne({id: productID});

    res.status(200).json({
        product,
    })
}));

module.exports = router;