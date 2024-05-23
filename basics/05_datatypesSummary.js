//two types of datatype 
//basis : how data is stored and accessed
/*Primitive datatype(call by value)
  number,string,boolean,null,symbol,undefined,bigint
*/
/*Non Primitive : 
arrays,functions,objects
*/
let arr=[1,2,3,4,5]
let obj={
    name:"Sakshi",
    age:19
}

let myfun=function(){
    console.log("hello")
}




//***********************************Stack and heap********************************************************** */
 //Primitive :Stack
 //Non-Primitive :heap
 let name="sakshi"//stack
 let age=22//stack
 let name1=name;//stack
 name1="saksham";//stack
 console.log(name)
 console.log(name1);
 let user1={
    name:"riya",
    age:20

    
 }
 let user2=user1;//heap


