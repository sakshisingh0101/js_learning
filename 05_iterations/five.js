let mynums=[1,2,3,4,5,6,7,8,9,10]
// mynums.forEach((item,index)=>{
//     mynums[index]=item+10
// })
// console.log(mynums);
let myNum=mynums.map((item)=>{
    return item+10
})
console.log(myNum);
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);
