const Carousel = require('./models/carouselModel');
const Product = require('./models/productModel');
const connectDB = require('./config/db');
require('dotenv').config();

const carouselItems = require('./data/carousels.json');
const products = require('./data/products.json');

connectDB();

const importData = async () =>{
    try {
        await Carousel.deleteMany();
        await Product.deleteMany();

        await Carousel.insertMany(carouselItems);
        await Product.insertMany(products);

        console.log('Data imported');
        process.exit();
    } catch (error) {
        console.log('Something went wrong error : ' + error);
        process.exit(1);
    }
}

const destroyData = async () =>{
    try {
        await Carousel.deleteMany();
        await Product.deleteMany();

        console.log('Data destroyed');
        process.exit();
    } catch (error) {
        console.log('Something went wrong error : ' + error);
        process.exit(1);
    }
}

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}