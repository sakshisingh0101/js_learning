const random=parseInt((Math.random()*100)+1)
const guess=document.querySelector('#guessField');
const submit=document.querySelector('#subt');
const prevguess=document.querySelector('.guesses');
console.log(prevguess)
const guessesremaining=document.querySelector('.lastResult');
const result=document.querySelector('.resultParas');
const loworhi=document.querySelector('.lowOrHi');
let prevguesses=[];
let playGame=true;
let numguesses=0;
if(playGame)
{
  submit.addEventListener('click',(e)=>{
    e.preventDefault();
    const input =parseInt(guess.value);
    validGuess(input)
  })
}
function validGuess (input)
{
  // if(isNaN(input)||input>100||input<1)
  // {  alert('Please enter a valid number');
     
  // }
  if(isNaN(input))
  {
    alert('Please enter a valid number');
  }
  else if(input>100)
  {
    alert('Enter a number between 1-100');
  }
  else if(input<1)
  {
    alert('Enter a number between 1-100')
  }
  else{
    prevguesses.push(input);
    
    if(numguesses>=10)
    {
      displayguess(input);
      displaymessage(`Game Over`);
      endgame()
    }
    
    else{ checkguess(input);
      displayguess(input);
      
      numguesses++;
    }
  }
}
function checkguess(input)
{
   if(input===random)
   {
     displaymessage(`you guessed it right`);
     endgame();
   }
   else if(input>random)
   {
     displaymessage(`The number is too high`)
   }
   else{
     displaymessage(`the number is too low`);
   }
}
function displayguess(input)
{
  prevguess.innerHTML+=`${input} `
  input=''
  guessesremaining.innerHTML=`${10-numguesses}`

  

}
function displaymessage(message)
{
   loworhi.innerHTML=`${message}`;
}
function newgame()
{
  playGame=true;
  numguesses=0;
  prevguesses=[];
  prevguess.innerHTML="";
  guessesremaining.innerHTML="10";
}
function endgame()
{
  guess.value='';
   guess.setAttribute('disabled','')
   const button=document.createElement('button');
   button.setAttribute('class','button');
   const text=document.createTextNode('Start Again');
   button.append(text);
   result.append(button);
   playGame=false;
   button.style.backgroundColor='black';
   button.style.color='white';
   button.style.height='40px;';
   button.style.backgroundColor='50px';
   button.style.fontSize='25px';

   button.addEventListener('click',function(e){
     e.target.preventDefault();
     newgame();
   })
}





// submit.addEventListener('click',(e)=>{
  
//   result.remove(prevguess);
//     result.remove(guessesremaining);
//     let p=document.createElement('p');
//     let text=document.createTextNode('Start Over');
//     p.append(text);
//     result.append(p);
    
     
  
// //   else{

//   }
