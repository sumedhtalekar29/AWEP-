var likeconuter=0;
var commments=0;
function liker()
{
    likeconuter++;
    document.querySelector('#likeid').innerHTML= "Like " + likeconuter;
}
function commment()
{
    commments++   
   let b= document.createElement('div');
   b.textContent= "comment" + commments;
    let c=document.querySelector('#commentid');
    c.appendChild(b);
    
}
