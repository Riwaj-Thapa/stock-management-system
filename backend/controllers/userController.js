import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const registerUser = async(req,res) =>{

    const { username, password, role, name, phone, email} = req.body;

    if( ! username || !password ||! role || !name || !phone || !email){
        return res.status(400).json({message:"Empty infeilds"})
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        res.status(400);
        throw new Error("email already registered!");
    }

        // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password: ", hashedPassword);

    const user = await User.create({
        username,
        email,
        role,
        name,
        phone,
        password: hashedPassword,

    });

    console.log(`User created: ${user}`);

    if (user) {
        return res.status(201).json({ _id: user.id, email: user.email });
    } else {
        res.status(400);
        throw new Error("User data is not valid");
    }

};

const loginUser = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
            {
                user: {
                    fullName:user.fullName,
                    email:user.email,
                    role:user.role,
                    address:user.address,
                    gender:user.gender,
                    points:user.points,
                    phoneNumber:user.phoneNumber,
                    password:user.password,
                    profilePicture:user.profilePicture,
                    subscription:user.subscription
                },
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "30m" }
        );
        res.status(200).json({ accessToken });
    } else {
        res.status(401);
        throw new Error("Email or password is not valid");
    }
};




export {registerUser,loginUser};