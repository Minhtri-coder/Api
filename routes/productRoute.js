const express = require('express');
const router = express.Router();
const productModel = require('../model/productModel');


router.post('/add-product',async function(req,res){
   const {name,description,price,quantity,status,cateID} = req.body
    const createAt = new Date();
    const updateAt = new Date();
   const newProduct = {name,description,price,quantity,status,createAt,updateAt,cateID};
   await productModel.create(newProduct);
       res.status(200).json({status: true, message: "thêm sản phẩm thành công"})
})

//3:hiện thị product theo loại
router.get('/all-product', async function(req,res){
    const list = await productModel.find()
    res.status(200).json({status: true, message: "thành công", data: list})

})

//4:hiện thị chi tiết sản phẩm
router.get('/all-orderDetails-product', async function(req,res){
    const { id } = req.query;
    const list = await productModel.findById(id);
    res.status(200).json({status: true, message: "thành công", data: list})

})

//5:hiện thị tìm kiếm theo tên sản phẩm
router.get('/search-product', async function(req,res){
    const { name } = req.query;
    const list = await productModel.findOne({name});
    res.status(200).json({status: true, message: "thành công", data: list})

})
module.exports = router;