const express = require('express');
const router = express.Router();
const categorytModel = require('../model/categoryModel');

//thêm thể loại
router.post('/add-category',async function(req,res){
    const {name} = req.body;
    const newCategory = {name};
    await categorytModel.create(newCategory)
    res.status(200).json({status: true, message: "thêm thể loại"})
})

router.get('/all-category',async function(req,res){
    const list = await categorytModel.find()
    res.status(200).json({status: true, message: "thể loại",data: list})
})

module.exports = router;