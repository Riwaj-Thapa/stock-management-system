import express from "express"
import connectDb from "./middlewares/dbConnection.js";
import userRoutes from "./routes/userRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import * as dotenv  from 'dotenv'
dotenv.config()


const app = express();
const port = 8000;


connectDb();

app.use(express.json());


app.use('/api/users', userRoutes);

app.use('/api/products', productRoutes);




app.listen(port,()=>{
    console.log("Server is running in the port "+ port)
})



