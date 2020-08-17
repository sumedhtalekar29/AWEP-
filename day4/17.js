let counter =1;
function increment(){
    counter++
    let inc=document.querySelector('#cid').innerHTML=counter;
   // counter =counter + 1;
    //inc.innerHTML=counter;
}

function decrement(){
    let dec=document.querySelector('#cid');
    counter =counter - 1;
    dec.innerHTML=counter;
}