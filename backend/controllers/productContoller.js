import Product from "../models/productModel.js";


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


export {addProduct};