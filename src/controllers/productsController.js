const ProductsModel = require('../models/productsModel')

async function get (req, res) {
    const {id} = req.params

    const obj = id ? {_id: id} : null 
    // is there an ID? So, obj is an objet with {_id: id}, else, obj is null. It might be "{}" as well.

    /* 
    OR...
    
    const obj = {}

    if (id) {
        obj._id = id
    }

    OR...

    let obj

    if (id) {
        obj = {_id: id}
    }
    
    */

    const products = await ProductsModel.find(obj)

    res.send(products)
}

module.exports = {
    get
}