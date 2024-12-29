import Category from "../models/categoryModel.js";


const addCategory = async(req,res)=>{

    const {name,status} = req.body;

    if(!name|| !status){
        res.status(400).json({message:"Empty infeilds"})
    }
    const categoryModel = await Category.create({
        name,
        status
    });
    console.log(`Category added: ${categoryModel}`)
    res.status(200).json({ message:"Category has been added"})
};

const editCategory = async (req, res) => {
    const { id } = req.params;
    const { name, status } = req.body;

    if (!id || (!name && !status)) {
        return res.status(400).json({ message: "Invalid input fields" });
    }

    try {
        const updatedCategory = await Category.findByIdAndUpdate(
            id,
            { name, status },
            { new: true, runValidators: true } // Return the updated document and run validators
        );

        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        console.log(`Category updated: ${updatedCategory}`);
        res.status(200).json({ message: "Category has been updated", updatedCategory });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating category", error: error.message });
    }
};

// Delete a category
const deleteCategory = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: "Category ID is required" });
    }

    try {
        const deletedCategory = await Category.findByIdAndDelete(id);

        if (!deletedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        console.log(`Category deleted: ${deletedCategory}`);
        res.status(200).json({ message: "Category has been deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting category", error: error.message });
    }
};




export {addCategory,editCategory,deleteCategory};