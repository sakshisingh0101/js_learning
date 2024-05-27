//conacatenation of two arrays
let strangerThings=["Mike","Eleven","Will","Dustin","Lucas","Max"]
let vampireDiaries=["Elena","Stefan","Damon","Caroline","Bonnie"]
console.log(strangerThings.push(vampireDiaries));
strangerThings.pop()
//conatenate will return a new array does not make changes in original array
let concatenate=strangerThings.concat(vampireDiaries)
console.log(concatenate);


//Spread
let merge=[...strangerThings,...vampireDiaries]
console.log(merge);

//flat => return an array with all subarray elements
let arr=[1,2,3,4,[6,7],[8,9,[0,4,[5]]]]
console.log(arr.flat(1));
console.log(arr.flat(2));
console.log(arr.flat(3));


//fun of array
console.log(Array.from("100"));
console.log(Array.of(100,200,300));
console.log(Array.from({name:"sakshi"}));
