import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileupload from 'express-fileupload';

var app = express();

//to get router
import userRouter from './router/user.router.js';
import categoryRouter from './router/category.router.js';
import subcategoryRouter from './router/subcategory.router.js';
import AddProductRouter from './router/addproductrouter.js';

// cors configuration
app.use(cors()); 

//configuration to extract request body content 
app.use(bodyParser());

// configuration to extract requset body content
app.use(fileupload());

app.use("/user",userRouter);
app.use("/category",categoryRouter);
app.use("/subcategory",subcategoryRouter);
app.use("/addproduct",AddProductRouter);
app.listen(3001);
console.log("server started at http://localhost:3001");