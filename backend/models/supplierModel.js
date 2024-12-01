import mongoose from 'mongoose'
const { Schema } = mongoose;

const supplierSchema = new Schema({
    supplierName: { type: String, required: true },
    contactEmail: { type: String, required: true },
    contactPhone: { type: String, required: true },
    address: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

const Supplier = mongoose.model('Supplier', supplierSchema);

export default Supplier;

  