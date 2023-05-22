const ProductsModel = require('../models/productsModel')

function get (req, res) {
    res.send({
        ok: 'I am the get method of the application'
    })
}

module.exports = {
    get
}