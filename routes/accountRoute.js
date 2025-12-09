const express = require("express");
const router = express.Router();
const accountModel = require("../model/accountModel");
const bcrypt = require('bcrypt');

//1:đăng ký
router.post("/register", async function (req, res) {
  const { email, password, fullname, Role, Status } = req.body;
  const newAccount = { email, password, fullname, Role, Status };
  await accountModel.create(newAccount);
  res
    .status(200)
    .json({ status: true, message: "Đăng ký tài khoản thành công" });
});

//1.1: danh sách đăng nhập
router.get("/all-account", async function (req, res) {
  const list = await accountModel.find();
  res.status(200).json({ status: true, message: "thành công", data: list });
});



// 1.1:đăng nhập
router.post("/login", async function (req, res) {
  console.log("CLIENT EMAIL:", `"${req.body.email}"`);
  console.log("CLIENT PASS:", `"${req.body.password}"`);
  const { email, password } = req.body;
  const users = await accountModel.findOne({email, password});
  if(!users){
      return res.status(401).json({
        status: false,
        message: "Email hoặc mật khẩu không đúng",
      });
  }
  res.status(200).json({ status: true, message: "thành công", data: users});
});

//2:Cập nhập thông tin
router.put("/updater-account", async function (req, res) {
  const { id, name, password, fullname, AccountID } = req.body;
  const item = await accountModel.findById(id);
  if (item) {
    item.name = name ? name : item.name;
    item.password = password ? password : item.password;
    item.fullname = fullname ? namfullnamee : item.fullname;
    item.name = AccountID ? AccountID : item.AccountID;
  }
});

//2:thay đổi thông tin người dùng

router.put("/update-account", async function (req, res) {
  const { id, email, password, fullname, AccountID } = req.body;
  const item = await accountModel.findById(id);
  if (item) {
    item.email = email ? email : item.email;
    item.password = password ? password : item.password;
    item.fullname = fullname ? fullname : item.fullname;
    item.AccountID = AccountID ? AccountID : item.AccountID;
    await item.save();
    res.status(200).json({ status: true, message: "Cập nhập thành công" });
  } else {
    res.status(200).json({ status: false, message: "không tìm thấy" });
  }
});

module.exports = router;
