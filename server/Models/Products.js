const mongoose = require('mongoose');
const { importJsonFile } = require('../utitily/util');

const dataSchema = new mongoose.Schema({}, { strict: false });
const Products = mongoose.model('Products', dataSchema, 'collection-products-sample'); // modelname, schema, collection name
// import json file to mongodb model -Products in collection-products-sample
//importJsonFile(Products)


module.exports = Products