const router = require('express').Router()

const ProductsController = require('../controllers/productsController')

router.get('/products/:id?', ProductsController.get) // here ID parameter is optional ("?")
//router.post('/products', ProductsController.post)
//router.put('/products/:id', ProductsController.put)
//router.delete('/products/:id', ProductsController.delete)

module.exports = router