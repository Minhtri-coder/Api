const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const account = new Schema({
     id: { type: ObjectId }, // khóa chính
     email: { type: String},
      password: { type: String},
       fullname: { type: String},
        Role:{type:String},
       Status:{type:Number},
       AccountID: {type: ObjectId, ref:"billModel"},
});

module.exports = mongoose.models.account || mongoose.model('account', account);