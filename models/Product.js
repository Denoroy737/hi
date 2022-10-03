const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    size: { type: String },
    color: { type: String },
    availableQty: { type: Number, required: true },
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model('Product', ProductSchema);
//# sourceMappingURL=Product.js.map
