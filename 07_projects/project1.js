let buttons=document.querySelectorAll(".button");
let body=document.querySelector('body');
buttons.forEach((item)=>{
  // console.log(item);
  item.addEventListener('click',(e)=>{
    // console.log(e);
    // console.log(e.target)
    switch(e.target.id)
    {
      case 'grey': body.style.backgroundColor="grey";
                   break;
      case 'blue': body.style.backgroundColor="blue";
                   break;
      case 'white':body.style.backgroundColor="white";
                   break;
      case 'yellow':body.style.backgroundColor="yellow";
         break;
    }

  })
})