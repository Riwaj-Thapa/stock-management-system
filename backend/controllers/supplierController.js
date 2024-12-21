import Supplier from '../models/supplierModel.js'


const registerSuppiler = async(req,res) =>{

    const { name, email, phoneNumber, profilePictureUrl, dateOfBirth, gender,address, status } = req.body;


    if( ! name || !email ||! phoneNumber || !profilePictureUrl || dateOfBirth || gender || address || status){
        return res.status(400).json({message:"Empty infeilds"})
    }
    const existingUser = await Supplier.findOne({ email });
    if (existingUser) {
        res.status(400);
        throw new Error("email already registered!");
    }


    const supplier = await Supplier.create({
        name,
        email,
        phoneNumber,
        profilePictureUrl,
        dateOfBirth,
        gender,
        address,
        status
    });

    console.log(`Supplier created: ${supplier}`);

    if (supplier) {
        return res.status(201).json({ _id: supplier.id, email: supplier.email });
    } else {
        res.status(400);
        throw new Error("Supplier data is not valid");
    }

};


export {registerSuppiler};