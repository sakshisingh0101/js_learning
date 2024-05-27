let date=new Date()
// console.log(date);
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleTimeString());
// console.log(date.toTimeString());

// let mydate=new Date(2024,11,24,15,54,36,1)
// console.log(mydate.toLocaleDateString());

// let mydate=new Date("01-23-2024")
// console.log(mydate.toLocaleDateString());

let my_date=new Date("2024-12-23")
// console.log(my_date.toLocaleString());
//let timeStamp=Date.now()
let timeStamp= Date.now()
console.log(timeStamp);//1 jan 1970 se ms
console.log(my_date.getTime());//ms
console.log((my_date.getTime())/1000)//in s
console.log(date.getDate());
console.log(date.getDay());
console.log(date.toLocaleString('default',{
    // weekday:"long",
    dateStyle: "full"
}))