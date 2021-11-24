let productReturnList = require('./productReturnsList.json')
let productReturnModel = require('./productReturn')

productReturnList.forEach(async (productReturn) => {
    console.log('Creating product return : ', productReturn.ProductName)
    let createdId = await productReturnModel.createProductReturn(productReturn)
    console.log('-------created with id', createdId)
})