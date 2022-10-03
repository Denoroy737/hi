// next api route support
import connectDb from '../../middleware/mongoose'
import UserSchema from '../../models/User';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    console.log(req.body);
    let user = new UserSchema(req.body);
    user.save()
    res.status(200).json({ message: 'success' })
  }
  else {
    res.status(405).json({ message: 'method not allowed' })
  }

}

export default connectDb(handler)