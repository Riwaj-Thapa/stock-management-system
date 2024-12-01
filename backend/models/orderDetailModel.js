import mongoose from 'mongoose'
const { Schema } = mongoose;

const orderDetailSchema = new Schema({
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });
  
  const OrderDetail = mongoose.model('OrderDetail', orderDetailSchema);

  export default OrderDetail;