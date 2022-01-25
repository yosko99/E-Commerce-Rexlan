const asyncHandler = require('express-async-handler');
const Carousel = require('../models/carouselModel');
const express = require('express');
const router = express.Router();

router.get('/', asyncHandler(async (req, res) =>{
    const carouselItems = await Carousel.find({});

    res.json(carouselItems);
}));

module.exports = router;