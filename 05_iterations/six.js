const arr=[1,2,4]
const num=arr.reduce((acc,currval)=>{
    return acc*currval
},1)
console.log(num);