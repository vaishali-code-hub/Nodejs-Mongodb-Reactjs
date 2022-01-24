const express = require('express')
const router = express.Router();
const {getAllProducts} = require('../controllers/ProductController')

router.get('/', (req, res) => res.send('Hello World with Express'));

router.get('/allProducts', getAllProducts);
            
module.exports = router
