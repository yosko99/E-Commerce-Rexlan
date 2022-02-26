const asyncHandler = require('express-async-handler');
const queryChecker = require('./utils/queryChecker');
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

// @desc Fetch products depending on subcategory
// @route GET /api/products/category/:subcategory
// @access Public
router.get('/category/:subcategory', asyncHandler(async (req, res) =>{
    const subcategory = req.params.subcategory;
    
    const products = await Product.find({'primary_category_id': subcategory});

    res.status(200).json(products);
}));


// @desc Fetch products depending on subcategory and optional query params (price, color, size)
// @route GET /api/products/filter/:subcategory?(color,size,price)
// @access Public
router.get('/filter/:subcategory', asyncHandler(async (req, res) =>{ 
    const subcategory = req.params.subcategory;

    const query = {
        $and : [
            {'primary_category_id': subcategory},
        ]
    }

    if(req.query.price !== undefined) {
        query.$and.push({'price': { $gte: Number(req.query.price) }});
    }
    if(req.query.color !== undefined) {
        query.$and.push({'image_groups.variation_value': queryChecker(req.query.color)});
    }
    if(req.query.size !== undefined) {
        query.$and.push({'variation_attributes.values.value': queryChecker(req.query.size)});
    }
 
    const products = await Product.find(query);

    res.status(200).json(products);
}));

// @desc Fetch a single product by id
// @route GET /api/products/id/:id
// @access Public
router.get('/id/:id', asyncHandler(async (req, res) =>{
    const productID = req.params.id;

    const product = await Product.findOne({id: productID});

    res.status(200).json(product);
}));

module.exports = router;