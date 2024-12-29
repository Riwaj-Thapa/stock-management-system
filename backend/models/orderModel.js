import mongoose from 'mongoose'

const ordersSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  date: { type: Date, required: true },
  orderStatus: { type: String, default: 'Pending' },
  paymentMethod: { type: String, default: 'Cash' },
  amount: { type: String, required: true },
  transactionId: { type: String, default: null },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
  staffId: { type: String, required: true, ref: 'User' },
});
  
  const Order = mongoose.model('Order', ordersSchema);

  export default Order;