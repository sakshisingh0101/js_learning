//singleton objects  constructor
//Object.create()
//object literals
let sym=Symbol("hello")

let user={
    name:"Ash",
    age:"19",
    email:"sakshi@google.com",
    isloggedin:false,
    [sym]:"helo"




}
console.log(user["name"])
console.log(user[sym]);
//obejct freeze


 Object.freeze(user.email);
user["name"]="riya";
console.log(user["name"]);
user.city="delhi"
console.log(user);
user.greetings=function(){
    console.log("hello how are you");
}
console.log(user.greetings());
