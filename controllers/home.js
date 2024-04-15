const path=require("path")
const Filepath=path.join(__dirname,'..','views','shop.html')
 exports.homepage=(req,res,next)=>{

    res.sendFile(Filepath, (err) => {
        if (err) {
            console.error(err);
            res.status(err.status || 500).send('Error sending file.');
        } else {
            console.log('File sent successfully');
        }
    })
}