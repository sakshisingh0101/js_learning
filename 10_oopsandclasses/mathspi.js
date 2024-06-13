//Object.getOwnPropertyDescriptor(Math)

// console.log(Math.PI)
// Math.PI=5;
// console.log(Math.PI)
let chai={
    name: "chai",
    price: "150",
    isavailabale:true,
    order:function()
    {
        console.log("chai nhi bani");
    }
}
    console.log(Object.getOwnPropertyDescriptor(chai,'name'));
    Object.defineProperty(chai,"name",{
        writable:false,
        enumerable:false,

    })
    chai.name="masala chai";
    console.log(chai.name);
    console.log(Object.getOwnPropertyDescriptor(Math,'PI'))
    // Object.defineProperty(Math,'PI',{
    //     writable:true,
    //     enumerable:true,
    //     configurable:true
        
    // })
    // Math.PI()=1234;
    console.log(Math.PI);
    for(const key in chai)
        {   if(typeof chai[key]!=='function')
            {
                console.log(`${key} : ${chai[key]}`);
            }
           
        }

    