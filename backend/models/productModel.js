import mongoose from 'mongoose'
const { Schema } = mongoose;

const productSchema = new Schema({
    productName: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    stockQuantity: { type: Number, required: true },
    supplierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });
  
  const Product = mongoose.model('Product', productSchema);


  export default Product;