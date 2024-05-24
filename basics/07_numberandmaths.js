const id=12345
const balance=new Number(93928230)
console.log(typeof balance);
console.log(balance);
console.log(typeof id);
//prototype of number
/*toString()
toExponential()
toFixed(2)
toPrecise(1-21)
toLocaleString('en-IN')


***funtions of number***
Property	                Description
Number.MAX_VALUE	        The largest positive representable number (1.7976931348623157e+308)
Number.MIN_VALUE	        The smallest positive representable number (5e-324)
Number.NaN	                Special "not a number" value
Number.NEGATIVE_INFINITY	Special negative infinite value; returned on overflow
Number.POSITIVE_INFINITY	Special positive infinite value; returned on overflow
Number.EPSILON	            Difference between 1 and the smallest value greater than 1 that can be 
                            represented as a Number (2.220446049250313e-16)
Number.MIN_SAFE_INTEGER	     Minimum safe integer in JavaScript (−2^53 + 1, or −9007199254740991)
Number.MAX_SAFE_INTEGER	     Maximum safe integer in JavaScript (+2^53 − 1, or +9007199254740991)
Method	Description
Number.parseFloat()	Parses a string argument and returns a floating point number. Same as the global parseFloat() function.
Number.parseInt()	Parses a string argument and returns an integer of the specified radix or base. Same as the global parseInt() function.
Number.isFinite()	Determines whether the passed value is a finite number.
Number.isInteger()	Determines whether the passed value is an integer.
Number.isNaN()	Determines whether the passed value is NaN. More robust version of the original global isNaN().
Number.isSafeInteger()	Determines whether the provided value is a number that is a safe integer.
)*/

const key=2983
console.log(Number.isNaN(key));
console.log(key.toFixed(2));


//**********************************MATHS********************************************************8
/*functions in maths
Math.abs()
Math.round()
Math.ceil(4.2)->5
Math.floor(4.5)->4
Math.sqrt()
Math.pow()
Math.min(3,45,6,4)
Math.max(4,6,5,3)
*/
let max=30
let min=10
console.log(Math.random())
console.log(Math.floor(((Math.random())*10)+1))
console.log(Math.floor(((Math.random())*(max-min+1))+min));
