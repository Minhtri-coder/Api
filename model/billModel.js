    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;
    const ObjectId = Schema.ObjectId;
    const bill = new Schema({
        id: { type: ObjectId }, // khóa chính
        date: { type: Date},
        email: { type: String},
        accountID:{type: ObjectId, ref:"accountModel"},
        billDetails: [
            {   
                id: { type: ObjectId }, // khóa chính
                quantity: { type: Number },
                productID: { type: ObjectId, ref:"productModel" },
            }
        ]
    });

    module.exports = mongoose.models.bill || mongoose.model('bill', bill);