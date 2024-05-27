//Immediate Invoke Function Execution IIFE
//To avoid pollution from global variable
(function chai()
{
    console.log("hello")
})();//we need to put semicolon to ensure that the execution ends here
(()=>{
    console.log("hello");
})();
