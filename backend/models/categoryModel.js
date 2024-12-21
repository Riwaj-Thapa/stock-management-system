import mongoose from 'mongoose';

// Define the Category schema
const categorySchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  status: { type: Boolean, default: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

const Category = mongoose.model('Category', categorySchema);

export default Category;