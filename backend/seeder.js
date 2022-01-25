const Carousel = require('./models/carouselModel');
const connectDB = require('./config/db');
require('dotenv').config();

const carouselItems = require('./data/carousels.json');

connectDB();

const importData = async () =>{
    try {
        await Carousel.deleteMany();

        await Carousel.insertMany(carouselItems);

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