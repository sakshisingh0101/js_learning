// const date=new date();
// console.log(date.toLocaleTimeString)
let time=document.querySelector('#clock');
// setInterval(function(){
//   const mydate=new Date();
//   time.textContent=mydate.toLocaleTimeString();
// },1000)
time.addEventListener('click',function(e){
  //  const mydate=new Date();
  // e.target.innerHTML=mydate.toLocaleTimeString();
  setInterval(function(){
    const mydate=new Date();
    e.target.textContent=mydate.toLocaleTimeString();
  },1000)
})