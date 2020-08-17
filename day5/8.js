function handlemouseover(){
    let a=document.querySelector("#id2")
    a.style.background='tomato';
    a.style.color='white';
    a.innerHTML="hello world";
}
function handlemouseout(){
    let a=document.querySelector("#id2")
    a.style.background='black';
    a.style.color='white';
    a.innerHTML="hello";
}