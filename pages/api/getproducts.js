import ProductSchema from '../../models/product';
import connectDb from '../../middleware/mongoose';

const handler = async (req, res)=>{
        const products = await ProductSchema.find();
        const tsharts = {}
        for (let item of products) {
                if (item.title in tsharts) {
                  if(tsharts[item.title].color.includes(item.color) && item.availableQty > 0 ){
                      tsharts[item.title].color.push(item.color)
                  }
                  if(tsharts[item.title].size.includes(item.size) && item.availableQty > 0 ){
                      tsharts[item.title].size.push(item.size)
                  }
                }
                else {
                  tsharts[item.title] = JSON.parse(JSON.stringify(item))
                  if (item.availableQty > 0) {
                    tsharts[item.title].color = [item.color]
                    tsharts[item.title].size = [item.size]
                  }
                }
              }
              res.status(200).json({tsharts})
        console.log(tsharts);
}

export default connectDb(handler);
  