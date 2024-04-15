
const express = require("express")
const path=require('path')
const addRoutes=require("./routes/addpro")
const adminRoutes=require("./routes/admin")
const contactRoutes=require("./routes/contact")
const bodyParser=require('body-parser')
const app =express()
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({extended:false}))

app.use("/admin",adminRoutes)
app.use("/add-product",addRoutes)
app.use(contactRoutes)
app.use((req,res,next)=>{

    res.status(404).send("<h1>page not found</h1>")
})
app.listen(3000)
