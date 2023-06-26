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

async function post (req, res) {
    const {
        name: name,
        brand: brand,
        price: price
    } = req.body

    //console.log(req.body)

    const product = new ProductsModel({
        name: name,
        brand: brand,
        price: price
    })

    product.save()

    res.send({
        message: 'product succesfully saved'
    })
}

async function put (req, res) {
    const { id } = req.params

    const product = await ProductsModel.findOneAndUpdate({ _id:id }, req.body, { new: true })
    // 1 = which one we want to update
    // 2 = what we want to update
    // 3 = whether we want to return the updated file

    res.send({
        message: 'product succesfully updated',
        product
    })

    /* 
    ==> "findOne" and "updateOne" updates the file but don't returns the updated file as a response!
    ==> This method is correct as well, if we don't need to return the updated file.

    const product = await ProductsModel.findOne({ _id: id }) // or "find by ID"

    await product.updateOne(req.body) // this way let us update everything that comes in the request

    res.send({
        message: 'product succesfully updated',
        product
    }) 
    */
}

async function remove (req, res) {
    const { id } = req.params

    const remove = await ProductsModel.deleteOne({ _id: id })

    const message = remove? 'product succesfully removed' : 'some error has ocurred!'

    res.send({
        message
    })
}

module.exports = {
    get,
    post,
    put,
    remove
}