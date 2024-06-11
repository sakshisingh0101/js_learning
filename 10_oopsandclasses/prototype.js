
let myName=['sakshi ','singh']

console.log(myName)
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
let obj=new Array;
obj.push(1);
obj.push(2);
Object.prototype.countLength=function()
{
    let count=0;
    for(let i=0;i<obj.length;i++)
        {
            count++;
        }
    return count;
}
console.log(obj.countLength())


//instances 
//outdated syntax
const teacher={
    makevideo:true

}
const teacherSupport={
    isavailable:true
}
const TASupport={
    makeassignment:'Javascript',
    fulltime:true,
    __proto__:teacherSupport
}

//new syntax
Object.setPrototypeOf(teacherSupport,teacher);
console.log(TASupport.isavailable);
console.log(teacherSupport.makevideo)
