//comparisons
/* ==,>,<,<=,>=,!=*/
console.log("1">2)//false The string "1" is coerced to a number, resulting in 1 > 2.
//1 is not greater than 2, so the result is false.

console.log(2<"3");//true
//same reason 3 gets converted to number 

console.log(null==0);//false null is loosely close dto undefined not wquals to 0 
console.log(null>=0);//true in case of <= and >= null is coerced to 0 i.e . 0>=0 which gives true
console.log(null<0);//false Similar to the previous point, null is coerced to 0.
console.log(undefined==0);//false undefined is not loosely equal to any other value except itself and null.
console.log(undefined>0);//false When comparing undefined with a number using relational operators, undefined is coerced to NaN.
// Any comparison involving NaN is always false, so undefined > 0 is false.
console.log(undefined<=0);//false
//== ,<=and>= work differntely in js
//strict check which also check datatype and data conversion do not occur here(===)
