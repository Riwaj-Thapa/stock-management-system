import express from "express"

const app = express();
const port = 8000;

app.post('/test',(req,res)=>{

    res.status(200).send("passed")

});

app.listen(port,()=>{
    console.log("Server is running in the port "+ port)
})

