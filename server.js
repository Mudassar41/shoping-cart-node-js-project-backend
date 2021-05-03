const express=require('express');
const mongoose=require('mongoose')
const app=express();

const bodyparser=require('body-parser');
const port = 4000;


const db=require('./config/connection').connectionURL;
mongoose.connect(db,{useUnifiedTopology:true,useNewUrlParser:true}).then(()=>console.log("Connected Successfully")).catch(err=>console.log(err));
const ProductRoute=require('./api/routes/products')

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use('/Cart',ProductRoute);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


