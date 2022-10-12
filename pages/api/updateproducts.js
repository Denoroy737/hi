import ProductSchema from '../../models/product';
import connectDb from '../../middleware/mongoose';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            const product = await ProductSchema.findByIdAndUpdate(req.body[i]._id, req.body[i])
        }
        res.status(200).json({ message: 'Products added successfully' });
    }
    else {
        res.status(400).json({ msg: 'Method not allowed' });
    }

}

export default connectDb(handler);

