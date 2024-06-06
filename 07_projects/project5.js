const start=document.querySelector('#start');
const stop=document.querySelector('#stop');
function randomColor(){
  let color='#';
  let hex="0123456789ABCDEF";
  for(let i=0;i<6;i++)
  {
    color+=hex[Math.floor(Math.random()*16)];
  }
  return color;

  
}
let startInterval;
start.addEventListener('click',function(e){
  startInterval=setInterval(function(){
    const Color=randomColor();
    const body=document.querySelector('body');
    body.style.backgroundColor=Color;
  },1000)
})
stop.addEventListener('click',function(e){
clearInterval(startInterval);
})