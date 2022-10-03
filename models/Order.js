const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
    userId: { type: String, required: true },
    products: [{
        productId: { type: String },
        quntity: { type: Number, default: 1 },
        price: { type: Number },
    }],
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: 'Pending', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
//# sourceMappingURL=Order.js.map
