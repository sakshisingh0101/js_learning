const promiseOne=new Promise(function(resolve,reject){
    //Async task
    //DB calls,cryptograph,networks
    setTimeout(()=>{
     console.log("Async task is complete");
     resolve();
    },1000)
})
//consumption of promise
promiseOne.then(function(){
    console.log("promise is resolved");
})
//another method
new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log('Promise 2 is async')
        resolve();

    },1000);
}).then(function(){
    console.log('Promise 2 is resolved');
})

new Promise(function(resolve,reject){
setTimeout(function(){
    resolve({username:"Sakshisingh0101",email:"sakshiaingh0101@gmail.com"})
},1000)
}).then(function(user){
    console.log(user)
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=true;
        if(!error)
            {
                resolve({username:"Sakshisingh0101",email:"sakshiaingh0101@gmail.com"})
            }
        else{
               reject("ERROR! Somethoing went wrong")
            }
    },1000)
})
promiseFour
.then(function(user){
    const userName=user.username;
    return userName;
})
.then((userName)=>{
    console.log(userName);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log('Promise is either resolved or rejected');
})

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=false;
        if(!error)
            {
                resolve({username:"Sakshisingh0101",email:"sakshiaingh0101@gmail.com"})
            }
        else{
               reject("ERROR! Somethoing went wrong")
            }
    },1000)
})
async function promiseConsumed()
{
 try 
 { 
    const resolved=await promiseFive;
     console.log(resolved);
 }
 catch(error)
 {
  console.log(error);
 }
 
}
promiseConsumed();

async function getAllUsers(){
    try
    {const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // const data=JSON.parse(response);
   let data= await response.json();
    console.log(data);
    }
    catch(error){
    console.log(error);
    }


}
getAllUsers()
fetch('https://jsonplaceholder.typicode.com/todos/1').then(function(response){
    return response.json();
}).then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log('Error')
}).finally(()=>{
    console.log('Successfully completed')
})


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
