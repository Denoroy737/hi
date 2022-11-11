// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from '../../middleware/mongoose'
import OrderSchema from '../../models/Order';

const handler = async (req, res) => {
  // Validate Paytm checksum ---[Pending]

  // update status into order table after checking the transtion status ---[Pending]
  if (req.body.STATUS === 'TXN_SUCCESS') {
    await OrderSchema.findOneAndUpdate({ orderid: req.body.ORDERID }, { status: "Paid", paymentInfo: JSON.stringify(req.body)});
  }
  else if (req.body.STATUS === "PENDING") {
    await OrderSchema.findOneAndUpdate({ orderid: req.body.ORDERID }, { status: "Pending", paymentInfo: JSON.stringify(req.body)});
  }
  res.redirect('/order', 200);
  res.status(200).json({ body: req.body })
}
export default connectDb(handler)