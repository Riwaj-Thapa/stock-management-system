import mongoose from 'mongoose'
const { Schema } = mongoose;

const orderSchema = new Schema({
    orderId: { type: String, required: true, unique: true },
    staffId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    supplierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true },
    orderDate: { type: Date, required: true },
    totalAmount: { type: Number, required: true },
    orderStatus: { type: String, enum: ['Pending', 'Completed', 'Shipped', 'Cancelled'], required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });
  
  const Order = mongoose.model('Order', orderSchema);

  export default Order;