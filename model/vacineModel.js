const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const vacine = new Schema({
    id: { type: ObjectId }, // khóa chính
    name: { type: String},
    national:{type: String},
    price:{type: String},
     createAt:{type: Date},
      updateAt:{type: Date},
});
module.exports = mongoose.models.vacine || mongoose.model('vacine', vacine);
// category -----> categories