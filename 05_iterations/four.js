// let arr=[
//     {
//         language:"java",
//         ext:"java"
//     },
//     {
//         language:"c++",
//         ext:"cpp"
//     },
//     {
//         language:"javascript",
//         ext:"js"
//     }
// ]
// //forEach loop does not return anythings even if we write return keyword
// let value=arr.forEach( (item)=>{
//     console.log(item.language + ":-" + item.ext);
//   return item;
// })
//console.log(value);
//basically we cannot perform any other operation by using forEach loop
let arr=[1,2,3,4,5,6,7,8,9,10]
// let nums=arr.filter((item)=>{
//     // if(item>4)
//     //     {
//     //         return item 
//     //     }
//     return item>4
// })
// console.log(nums);
// let num=[]
// arr.forEach((item)=>{
//     if(item>7)
//         {
//             num.unshift(item)
//         }
// })
// console.log(num);
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  let book=[]
  books.forEach((item)=>{
    if(item.genre=="History")
        {
            book.push(item.title)
        }
  })
//   book.forEach((item)=>{
//     console.log(item);
//   })
  let _book=books.filter( (item)=>{
    if(item.genre=="History")
        {
            return item.title
        }
  })
//   console.log(_book);
  let _book1=books.filter( (item)=>{
    return item.publish>2000
  })
  console.log(_book1);