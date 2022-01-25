const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carouselSchema = Schema({
    image: {
        type: String,
        required: true
    },
    carousel_title: {
        type: String,
        required: true
    },
    carousel_caption: {
        type: String,
        required: true
    },
    is_active: {
        type: Boolean,
        required: true
    },
})

const Carousel = mongoose.model('Carousel', carouselSchema);

module.exports = Carousel;