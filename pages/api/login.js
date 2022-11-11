// next api route support
import connectDb from '../../middleware/mongoose'
import UserSchema from '../../models/User';
import CryptoJS from 'crypto-js';
import jwt from "jsonwebtoken"

const handler = async (req, res) => {
    if (req.method === 'POST') {
        // console.log(req.body);
        let user = await UserSchema.findOne({ "email": req.body.email });
        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_PASS);
        let decryptedData = bytes.toString(CryptoJS.enc.Utf8);
        if (user) {
            if (req.body.email == user.email && req.body.password == decryptedData) {
                let  token = jwt.sign({ email: user.email, name: user.name}, process.env.SECRET_PASS, {expiresIn: '2d'});
                res.status(200).json({success: true, token})
            }
            else {
                res.status(200).json({ error: false, massage: 'Invalid Credentials' })
            }
        }
        else {
            res.status(200).json({ error: false, massage: 'User Not Found' })
        }
    }
    else {
        res.status(405).json({ message: 'method not allowed' })
    }
}

export default connectDb(handler)