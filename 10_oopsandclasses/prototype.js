
let myName=["Sakshi    "]
console.log(myName.length)
Array.prototype.truelength=function()
{
    let count=0;
    for(let i=0;i<this.length;i++)
        {
            if(myName[i]==" ")
                {
                    continue;
                }
                else{
                count++;
                }
        }
    return count;
}
console.log(myName.truelength())