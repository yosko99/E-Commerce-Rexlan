/* eslint-disable linebreak-style */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  categories: {
    type: Array,
    required: true,
  },
  category_id: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  page_description: {
    type: String,
    required: true,
  },
  page_title: {
    type: String,
    required: true,
  },
  parent_category_id: {
    type: String,
    required: true,
  },
  c_showInMenu: {
    type: Boolean,
    required: true,
  },
});


const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
