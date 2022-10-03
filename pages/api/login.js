// next api route support
import connectDb from '../../middleware/mongoose'
import UserSchema from '../../models/User';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        console.log(req.body);
        let user = await UserSchema.findOne({ "email": req.body.email });
        if (user) {
            if (req.body.email == user.email && req.body.password == user.password) {
                res.status(200).json({ message: 'success', email: user.email, name: user.name })
            }
        }
    }
    else {
        res.status(405).json({ message: 'method not allowed' })
    }
}

export default connectDb(handler)