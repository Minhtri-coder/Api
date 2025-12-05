    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;
    const ObjectId = Schema.ObjectId;
    const billDetails = new Schema({
      id: { type: ObjectId }, // khóa chính
                quantity: { type: Number },
                productID: { type: ObjectId, ref:"productModel" }
    });

    module.exports = mongoose.models.billDetails || mongoose.model('billDetails', billDetails);