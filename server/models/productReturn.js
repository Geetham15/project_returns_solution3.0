const mongoose = require('./mongooseDb')

const ProductReturn = mongoose.model('ProductReturn',
{
    "CustomerID": String,
    "OrderID" : String,
    "OrderDate" : Date, // to be modify as date
    "ProductID" : String,
    "ProductName" : String,
    "ItemPrice" : Number,
    "Quantity" : Number,
    "Colour" : String,
    "SoldBy" : String,
    "ReasonForReturn" : String,
    "EligibleToReturn" : Boolean
})

async function createProductReturn(productReturnData){
    let newProductReturn = new ProductReturn(productReturnData)
    let createdProductReturn = await newProductReturn.save()
    return createdProductReturn.id
}

async function listReturnItems(){
    return ProductReturn.find({})
}

async function findById(id){
    return ProductReturn.findById(id)
}
module.exports = {
    createProductReturn,
    listReturnItems,
    findById
}