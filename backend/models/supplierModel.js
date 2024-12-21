import mongoose from 'mongoose'

const supplierSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  profilePictureUrl: { type: String, default: null },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  status: { type: Boolean, default: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

const Supplier = mongoose.model('Supplier', supplierSchema);

export default Supplier;

  