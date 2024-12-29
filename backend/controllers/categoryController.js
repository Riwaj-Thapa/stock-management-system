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
            res.status(200).json({ message:"Product has been added"})
                

        };





export {addCategory};