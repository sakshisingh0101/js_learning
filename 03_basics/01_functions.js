function sayname(){
    console.log("SAKSHI SINGH")
}
// sayname()
function sum(a,b)
{
   
    return (sum=a+b)
}
let result=sum(3,90)
console.log(result);
function userloggedinmssg(username)
{
    return `${username} just logged in`
}
console.log(userloggedinmssg());

//carting
function calculatecartprice(...num)
{
    console.log(num)
}
calculatecartprice(1000,1230,432,4325)
//object passing
let user={
    name:"sakshi",
    email:"sakshi@gmail.com"
}
function object(anyobject)
{
    console.log(`${anyobject.name} is name and ${anyobject.email} is the email`);
}
object(user)
//similarly we can pass array in function