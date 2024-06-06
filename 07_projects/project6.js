const insert=document.querySelector('#insert');
window.addEventListener('keydown',function(e){
   insert.innerHTML=`<div id="table"><table>
   <tr>
     <th>Key</th>
     <th>keycode</th>
     <th>code</th>
     
   </tr>
   <tr>
     <td>${e.key===" " ? "Space" : e.key}</td>
     <td>${e.keyCode}</td>
     <td>${e.code}</td>
    
   </tr>
 </table></div>`
})