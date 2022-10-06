// next api route support
import connectDb from '../../middleware/mongoose'
import UserSchema from '../../models/User';
import CryptoJS from 'crypto-js';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    console.log(req.body);
    const { name, email } = req.body;

    
    let user = new UserSchema({name, email, password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_PASS).toString()});
    user.save()
    res.status(200).json({ message: 'success' })
  }
  else {
    res.status(405).json({ message: 'method not allowed' })
  }

}

export default connectDb(handler)