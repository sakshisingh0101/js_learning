let user={
    username:"sakshi",
    greetings_message:function()
    {
        console.log(`Hello ${this.username}`);


    }
}
user.greetings_message()
//global object in console windows this will refer to windows but in code environment global object is braces
console.log(this);

//arrow function
function call()
{
    console.log(this);
}

call()
let fun=function(){
    console.log(this)
}
fun()
let func =()=>{
    console.log(this);
}
func();
//arrow function implicit return and explicit return
let sum=(num1,num2)=>{
    return num1+num2
}
let add=(num1,num2)=> (num1+num2)
//let add=(num1,num2)=>num1+num2
console.log(sum(8,3));
console.log(add(8,3));
