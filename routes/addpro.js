const Product=require("../models/product")
const fs=require('fs')
const express=require('express')
const router=express.Router()
const path=require('path')
router.use(express.urlencoded({ extended: true }));
router.get('/',(req,res)=>{

    res.sendFile(path.join(__dirname,'..','views','addpro.html'))
})
router.post('/proar',(req,res)=>{
    const { title, price } = req.body;

    const data = `${title},${price}\n`;
    const filePath = path.join(__dirname, '..',  'products.csv');

    fs.appendFile(filePath, data, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error saving data to file');
        } else {
            console.log('Data saved to file');
            res.redirect('/admin/home');
        }
    })

const pro=new Product(req.body.title);

pro.save()
console.log(Product.fetchAll())



})

module.exports=router;