
const products=[]
module.exports=class product{

    constructor(t)
    {
        this.title=t
    }

save(t)
{
    products.push(this)
}
static fetchAll()
    {
        return products

    }

}