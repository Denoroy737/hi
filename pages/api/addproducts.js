import Product from '../../models/product';
import connectDb from '../../middleware/mongoose';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            const product = new Product({
                title: req.body[i].title,
                slug: req.body[i].slug,
                description: req.body[i].description,
                image: req.body[i].image,
                price: req.body[i].price,
                category: req.body[i].category,
                size: req.body[i].size,
                color: req.body[i].color,
                availableQty: req.body[i].availableQty
            });
            await product.save();
        }
        res.status(200).json({
            message: 'Products added successfully'
        });
    }
    else {
        res.status(400).json({ msg: 'Method not allowed' });
    }
    const products = await Product.find();
    res.status(200).json(products);

}

export default connectDb(handler);

