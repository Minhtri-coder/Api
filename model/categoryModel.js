const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const Category = new Schema({
     id: { type: ObjectId }, // khóa chính
     name: { type: String},
});

module.exports = mongoose.models.Category || mongoose.model('Category', Category);