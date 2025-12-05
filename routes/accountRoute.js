const express = require('express');
const router = express.Router();
const accountModel = require('../model/accountModel');

//1:đăng ký
router.post('/register',async function(req,res){
    const {email,password,fullname} = req.body;
    const newAccount = {email,password,fullname};
    await accountModel.create(newAccount)
    res.status(200).json({status: true, message: "Đăng ký tài khoản thành công"})
})
//1.1:đăng nhập
router.get('/all-account', async function(req,res){
    const list = await accountModel.find();
    res.status(200).json({status: true, message: "thành công", data: list})
})

//2:Cập nhập thông tin
router.put('/updater-account', async function(req,res){
    const {id,name,password,fullname,AccountID} = req.body
    const item = await accountModel.findById(id);
    if(item){
        item.name = name ? name : item.name
         item.password = password ? password : item.password
          item.fullname = fullname ? namfullnamee : item.fullname
           item.name = AccountID ? AccountID : item.AccountID
    }
})

//2:thay đổi thông tin người dùng

router.put('/update-account',async function(req,res){
    const {id,email,password,fullname,AccountID} = req.body
    const item = await accountModel.findById(id);
    if(item){
        item.email = email ? email : item.email
        item.password = password ? password : item.password
        item.fullname = fullname ? fullname : item.fullname
        item.AccountID = AccountID ? AccountID : item.AccountID
        await item.save();
              res.status(200).json({status: true, message: "Cập nhập thành công"});
    }else{
        res.status(200).json({status: false, message: "không tìm thấy"});
    }
})

module.exports = router;