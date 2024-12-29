import Product from "../models/productModel.js";


// Add a product
const addProduct = async(req,res)=>{

    const {productName,category,price,stockQuantity} = req.body;

    if(!productName|| !category || !price || !stockQuantity){
        res.status(400).json({message:"Empty infeilds"})
    }

        
            const productModel = await Product.create({
                productName,
                category,
                price,
                stockQuantity
        
            });
            console.log(`Product added: ${productModel}`)
            res.status(200).json({ message:"Product has been added"})
        };


// Edit a product
const editProduct = async (req, res) => {
    const { id } = req.params; // ID of the product to edit
    const { productName, category, price, stockQuantity } = req.body;

    if (!id || (!productName && !category && !price && !stockQuantity)) {
        return res.status(400).json({ message: "Invalid input fields" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { productName, category, price, stockQuantity },
            { new: true, runValidators: true } // Return the updated document and run validators
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        console.log(`Product updated: ${updatedProduct}`);
        res.status(200).json({ message: "Product has been updated", updatedProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating product", error: error.message });
    }
};

// Delete a product
const deleteProduct = async (req, res) => {
    const { id } = req.params; // ID of the product to delete

    if (!id) {
        return res.status(400).json({ message: "Product ID is required" });
    }

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        console.log(`Product deleted: ${deletedProduct}`);
        res.status(200).json({ message: "Product has been deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting product", error: error.message });
    }
};


export {addProduct,editProduct, deleteProduct};