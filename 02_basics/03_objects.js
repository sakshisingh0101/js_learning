// //singleton objects  constructor
// //Object.create()
// //object literals
// let sym=Symbol("hello")

// let user={
//     name:"Ash",
//     age:"19",
//     email:"sakshi@google.com",
//     isloggedin:false,
//     [sym]:"helo"




// }
// console.log(user["name"])
// console.log(user[sym]);
// //obejct freeze


//  Object.freeze(user.email);
// user["name"]="riya";
// console.log(user["name"]);
// user.city="delhi"
// console.log(user);
// user.greetings=function(){
//     console.log("hello how are you");
// }
// console.log(user.greetings());
/***************************************Singleton Object*********************************************** */
//SINGLETON OBJECT (CONSTRUCTOR)
let obj2=new Object()
//let obj={}//not singleton 
let obj1=Object.create({})
console.log(typeof obj1);
// console.log(obj1);
// console.log(obj);
// console.log(obj2);
obj1.name="Sakshi Singh"
obj1.age=19
obj1.fullname={user1fullname:{
    fullname:{
        firstname:"Sakshi",
        lastname:"Singh"

    }
}}
console.log(obj1.fullname.user1fullname.fullname);

//Merging two objects
let object_1={1:"a",2:"b"}
let object_2={3:"a",4:"b"}
let object_4=Object.assign({},object_1,object_2)
let object_3=Object.assign(object_1,object_2)
// console.log("object_3: ",object_3);
// console.log("object_4: ",object_4);
// console.log("obejct_1: ",object_1);
let object_5={...object_1,...object_2}//spreading
console.log("obejct_5: ",object_5);
console.log(Object.keys(object_1));
console.log(Object.values(object_1));
console.log(Object.entries(object_1));
console.log(object_2.hasOwnProperty(3));


//object destrucution
let course={
    courseName: "javasript",
    language:"hinglish",
    courseinstructor:"hitesh",
    platform:"youtube"

}
let {platform: plat}=course
console.log(plat);

//json and api
// {
//     "courseName": "javasript",
//     "language":"hinglish",
//     "courseinstructor":"hitesh",
//     "platform":"youtube"

// }
// [
//     {},{},{}
// ]