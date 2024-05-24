//ARRAYS
let arr1=[10,20,30,40,50]
let arr2=new Array(1,2,3,4,5)
console.log(typeof arr1);
console.log(typeof arr2[1]);

//ARRAYS METHODS
arr1.push(60)
console.log(arr1);
arr1.pop()
console.log(arr1);
// arr1.unshift(0);//push from start
// console.log((arr1));
arr1.shift()//pop from start
console.log(arr1);

//Slicing and Splicing
let myarr=[0,1,2,3,4,5]
console.log("A" , myarr);
//slicing
console.log(myarr.slice(1,4))
console.log("B", myarr);
//splicing
console.log(myarr.splice(1,4));
console.log("C",myarr);
//join coverts the elements of array into string
console.log(myarr.join());