const express = require("express");
const router = express.Router();
const billDetailsModel = require("../model/billDetailsModel");


router.post('/add-billdetails', async function(req,res){
      const {quantity,productID} = req.body
       const newBilldetails = {quantity,productID};
       await billDetailsModel.create(newBilldetails);
           res.status(200).json({status: true, message: "thêm chi tiết đơn hàng thành công"})
})


module.exports = router;