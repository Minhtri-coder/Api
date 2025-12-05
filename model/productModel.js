const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const Product = new Schema({
     id: { type: ObjectId }, // khóa chính
     name: { type: String},
     description:{type: String},
     price:{type: Number},
     cateID:{type: ObjectId, ref:"categoryModel"},
});

module.exports = mongoose.models.product || mongoose.model('Product', Product);