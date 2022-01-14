function printMessage(msg){
   let div=document.createElement('div');
   div.innerHTML=msg;
   document.getElementById('message').appendChild(div);
}

function printMessages(){
   document.getElementById('messages').innerHTML='';
}