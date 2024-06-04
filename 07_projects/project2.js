let form=document.querySelector('form');
//height and weight should not be fetch here because that will give you empty value
//let height=parseInt(document.querySelector(#height).value);
//  let weight=parseInt(document.querySelector(#weight).value);
// let weight=parseInt(document.querySelector('#weight').value);
form.addEventListener('submit',(event)=>{
  event.preventDefault();
  const height=parseInt(document.querySelector('#height').value);
  const weight=parseInt(document.querySelector('#weight').value);
  const result=document.querySelector('#results');
 let ans;
  if(height===""||height<0||isNaN(height)){
    result.innerHTML="please enter a valid height";

  }
  else if(weight===""||weight<0||isNaN(weight))
  { result.innerHTML="please enter a valid weight";

  }
  
  else
  { ans=(weight*10000/(height*height)).toFixed(2);
    let text=document.createTextNode(ans)
    result.append(text)
    // result.innerHTML=ans;
    
  }
  if(ans<=18.6){
    let span=document.createElement('span')
    let text=document.createTextNode("  Underweight")
    span.append(text);
    result.append(span);
    // result.innerHTML="Underweight";


  }
  else if(ans>=18.6&&ans<=24.9)
  {let span=document.createElement('span')
     let text=document.createTextNode("  Normal")
     span.append(text);
     result.append(span);
  // result.append(text)
    //  result.innerHTML="Normal ";
  }
  else{let span=document.createElement('span')
    let text=document.createTextNode("  Overweight")
    span.append(text);
    result.append(span);
    // result.innerHTML="Overweight";
  }
 
  
})