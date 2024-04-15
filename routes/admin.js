const express=require("express")
const path=require("path")
const home=require("../controllers/home")
const routes=express.Router()

routes.use(express.urlencoded({ extended: true }));


routes.get('/home',home.homepage)
module.exports=routes