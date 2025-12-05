const express = require("express");
const router = express.Router();
const billModel = require("../model/billModel");

//giỏ hàng

router.post("/add-cart", async (req, res) => {
  const { email, productID, quantity } = req.body;
  let bill = await billModel.findOne({ email });
  if (!bill) {
    bill = await billModel.create({date: new Date(), email, billDetails: [{ productID, quantity }]});
  } else {
    const index = bill.billDetails.findIndex((item) => item.productID.toString() === productID);
    if (index > -1) {
      bill.billDetails[index].quantity += quantity;
    } else {
      bill.billDetails.push({ productID, quantity });
    }
    await bill.save();
  }
  res.status(200).json({ status: true, message: "thêm giỏ hàng thành công" });
});

//lấy giỏ hàng
router.get("/all-cart", async (req, res) => {
  const { email } = req.body;
  const cart = await billModel.findOne({ email: email });
  res.status(200).json({ status: true, message: "thành công", data: cart });
});

//đặt hàng
router.post("/bill-order", async (req, res) => {
  const date = new Date();
  const {email,accountID,billDetails} = req.body;
  await billModel.create({date,email,accountID,
    billDetails: billDetails.map((item) => ({
      quantity: item.quantity,
      productID: item.productID,
    }))
  })
  res.status(200).json({ status: true, message: "Đặt hàng thành công", order });
});

//lấy đơn hàng
router.get("/all-order", async (req, res) => {
  const { email } = req.params;
  const orders = await billModel
    .find({ email })
    .populate("billDetails.productID");
  res.status(200).json({ status: true, orders });
});

//xử lý chức năng đơn hàng mà người dùng đã đặt trước đó
router.get("/orders-email", async (req, res) => {
  const orders = await billModel
    .find({ email })
    .populate("billDetails.productID");

  if (!orders || orders.length === 0)
    return res.json({ status: true,message: "Chưa có đơn hàng nào",orders: [],});
  res.status(200).json({ status: true, orders });
});

module.exports = router;
