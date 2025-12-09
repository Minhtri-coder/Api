const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const Product = new Schema({
     id: { type: ObjectId }, // khóa chính
     name: { type: String},
     author: { type: String},
     description:{type: String},
     price:{type: Number},
     quantity:{type: Number},
     image:{type: String},
     status:{type: Boolean},
     createAt:{type: Date},
      updateAt:{type: Date},
     cateID:{type: ObjectId, ref:"categoryModel"},
});

module.exports = mongoose.models.product || mongoose.model('Product', Product);