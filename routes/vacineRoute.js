const express = require("express");
var router = express.Router();
const vacinetRouter = require("../model/vacineModel");


//get vacine

router.get("/list", async (req, res) => {
  try {
    const list = await vacinetRouter
      .find()
      .sort({ price: 1 })
      .limit(3);          

    res.status(200).json({
      status: true,
      message: "Danh sách 3 vaccine giá thấp nhất",
      data: list
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Lấy danh sách thất bại",
      error: error.message
    });
  }
});


//post vacine
router.post('/add-vacine', async function(req,res){
 try {
  const {name,national,price} = req.body
  const newDA = {name,national,price};

  await vacinetRouter.create(newDA);
  res.status(200).json({status: true, message: "Thành công"});
 } catch (error) {
    res.status(200).json({status: true, message: "thất bại"});
 }
})

module.exports = router

//thêm một sản phẩm

