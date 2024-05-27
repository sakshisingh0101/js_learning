// //for of
// // let arr=[9,2,3,4,5]
// // for (const i of arr) {
// //     console.log(i);
    
   
// // }
let myobj="sakshi singh"
// for(const val of myobj)
//     {   if(val==" ")
//         {
//             continue;
//         }
//         console.log(val);
//     }

// //MAPS
let map_1=new Map()
map_1.set("Up","Lucknow")
map_1.set("Rajasthan","Jaipur")
map_1.set("Gujarat","Gandhi Nagar")
// console.log(map_1);
// for(const key of map_1)
// {
//     console.log(key);
// }
// console.log(map_1.get("Up"));
map_1.delete("Up")
console.log(map_1.size)
// //destructor of key and value
// for (const [key,value] of map_1) {
//     console.log(key + "=>" + value);
// }
let course={
    courseName: "javasript",
    language:"hinglish",
    courseinstructor:"hitesh",
    platform:"youtube"
}

// }
// let keys=Object.keys(course)
// for(let i=0;i<keys.length;i++)
// {
//     console.log(keys[i] + " =>" + course[keys[i]]);
// }
// for (const key in course) {
//     console.log(course[key]);
// }
// let arr=[1,2,3]
// for(const i in arr){
//     console.log(arr[i]);
// }
// for(const key in map_1){
//     console.log(key);
// }



//for each loop
let coding=['py','js','cpp','c','rb']
// coding.forEach(function (index){
// console.log(index);
// })
// coding.forEach((item)=>{
//     console.log(item);
// })
function print(item)
{
    console.log(item);
}
coding.forEach(print)
coding.forEach((item,index,arr)=>{
    console.log(item , index ,arr);
})
let arr=[
    {
        language:"java",
        ext:"java"
    },
    {
        language:"c++",
        ext:"cpp"
    },
    {
        language:"javascript",
        ext:"js"
    }
]
arr.forEach( (item)=>{
    console.log(item.language + ":-" + item.ext);

})