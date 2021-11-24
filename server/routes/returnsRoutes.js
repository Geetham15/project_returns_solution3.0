const express = require('express')
const router = express.Router()

const productReturnModel = require('../models/productReturn')

router.get('/productReturn', async(req,res) => {
    let productReturnList = await productReturnModel.listReturnItems()
    res.send(productReturnList)
})

router.get('/productReturn/:id', async(req, res) => {
    console.log('req.params' ,req.params)
    let id = req.params.id
    let returnDetail = await productReturnModel.findById(id)
    res.json(returnDetail)
})

router.post('/productReturn', async(req, res) =>{
    let newProductReturn = req.body
    //let id = req.params
    console.log(newProductReturn)
    let productReturnId = await productReturnModel.createProductReturn(newProductReturn)
    res.send(productReturnId)
})
module.exports = router