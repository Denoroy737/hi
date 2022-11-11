const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
    email: { type: String, required: true },
    orderid: { type: String, required: true },
    paytmInfo: { type: String, default: "" },
    products: { type: Object, required: true },
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: 'Initiated', required: true },
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model('Order', OrderSchema);
//# sourceMappingURL=Order.js.map
