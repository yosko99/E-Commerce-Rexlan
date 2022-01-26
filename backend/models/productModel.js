/* eslint-disable linebreak-style */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  price_max: {
    type: Number,
  },
  _id:{
      type: Object
  },
  id:{
    type: String
  },
  page_description: {
    type: String,
  },
  page_title: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  variation_attributes: {
    type: Array,
  },
  product_id: {
  },
  currency: {
    type: String,
  },
  primary_category_id: {
    type: String,
  },
  image_groups: {
    type: Array,
  },
  short_description: {
    type: String,
  },
  orderable: {
    type: Boolean,
  },
  variants: {
    type: Array,
  },
  type: {
    type: Object,
  },
  long_description: {
    type: String,
  },
  c_isSale: {
    type: Boolean,
  },
  c_isNew: {
    type: Boolean,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
