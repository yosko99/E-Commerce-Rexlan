const asyncHandler = require('express-async-handler');
const Category = require('../models/categoryModel');
const express = require('express');
const router = express.Router();

// @desc Fetch specific category
// @route GET /api/category/:subcategory
// @access Public
router.get('/:subcategory', asyncHandler(async (req, res) =>{
    const subcategory = req.params.subcategory;
    const response = await Category.find({'categories.id': subcategory});
    const category = response[0].categories.filter(category => category.id === subcategory)[0];

    res.json(category);
}));

module.exports = router;