const express=require('express')
const path=require("path")
const routes=express.Router()

routes.use(express.urlencoded({ extended: true }));
 const Filepath=path.join(__dirname,'..','views','contact.html')
routes.get('/contactus', (req,res)=>
{
    res.sendFile(Filepath, (err) => {
        if (err) {
            console.error(err);
            res.status(err.status || 500).send('Error sending file.');
        } else {
            console.log('File sent successfully');
        }
    });
}
)
routes.post('/confor',(req,res)=>{
   
    console.log(req.body)
    res.redirect('/success')


})

routes.get("/success",(req,res)=>{

res.sendFile(path.join(__dirname,'..','views','success.html'))

})




module.exports=routes