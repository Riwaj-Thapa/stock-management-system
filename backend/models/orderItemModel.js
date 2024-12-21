import mongoose from 'mongoose';

const orderItemsSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    quantity: { type: Number, default: 1 },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
    orderId: { type: String, required: true, ref: 'Order' },
    productId: { type: String, required: true, ref: 'Product' },
  });
  
const OrderItem = mongoose.model('OrderItem', categorySchema);

export default OrderItem;