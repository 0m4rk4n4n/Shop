let onetimecounter=0;
prices1=[10,25.22,29.32,50.23,34.13,120,23,21.12,24.23];
prices2=[16,22.63,79.35,37.23,64.53,230,223,211.12,124.6];
prices3=[28,111.32,53.32,31,45.22,12.12,32,65.22,27.32,60.23,42.13,122.5,62.23,62.23,99.12,12.23];

let tt=0;
let shoes=["shoe1.jpg","shoe2.jpg","shoe3.jpg","shoe4.jpg","shoe5.jpg","shoe6.jpg","shoe7.jpg","shoe8.jpg","shoe9.jpg"];
let jeans=["j1.jpg","j2.jpg","j3.jpg","j7.jpg","j20.jpg","j9.jpg","j9.jpg","j10.jpg","j18.jpg","j11.jpg",
"j12.jpg","j13.jpg","j15.jpg","j14.jpg","j15.jpg","j16.jpg"];
let skates=["s1.jpg","s2.jpg","s3.jpg","s4.jpg","s5.jpg","s6.jpg","s7.jpg",
"s8.jpg","s9.jpg","s10.jpg"];

(function()
{
    let initial=0;
    let finalcname;
    let finalprice;
    const btns=document.querySelectorAll(".btn-dark");
    btns.forEach(function(e)
    {
 
e.addEventListener('click',function(item)
{
let path=window.location.href;
finalpath=path.slice(path.length-10);
initial++;
const notification=document.querySelector(".has-badge");
notification.setAttribute("data-count",initial);
if(finalpath=="shoes.html")
{
    let cname=item.target.parentNode.className;
    finalcname=cname.slice(11);
    finalprice=prices1[finalcname-1];

const text=document.createElement("tr");
text.innerHTML='<td><img height="80" width="100" src='+shoes[(finalcname)-1]+'></td><td></td><td></td><td></td><td>'+finalprice+'</td> </tr>';
const el=document.querySelector(".insert");
const cart=document.getElementById("table");
const ppp=document.querySelector(".printprice");
cart.insertBefore(text,el.nodeValue);
tt+=finalprice;
ppp.innerHTML=tt.toFixed(2);

}
if(finalpath=="skate.html")
{
    let cname=item.target.parentNode.className;
    finalcname=cname.slice(11);
    finalprice=prices2[finalcname-1];
const text=document.createElement("tr");
text.innerHTML='<td><img height="80" width="100" src='+skates[(finalcname)-1]+'></td><td></td><td></td><td></td><td>'+finalprice+'</td> </tr>';
const el=document.querySelector(".insert");
const cart=document.getElementById("table");
const ppp=document.querySelector(".printprice");
cart.insertBefore(text,el.nodeValue);
tt+=finalprice;
ppp.innerHTML=tt.toFixed(2);
}
if(finalpath=="jeans.html")
{
    let cname=item.target.parentNode.className;
    finalcname=cname.slice(11);
    finalprice=prices3[finalcname-1];

const text=document.createElement("tr");
text.innerHTML='<td><img height="80" width="100" src='+jeans[(finalcname)-1]+'></td><td></td><td></td><td></td><td>'+finalprice+'</td> </tr>';
const el=document.querySelector(".insert");
const cart=document.getElementById("table");
const ppp=document.querySelector(".printprice");
cart.insertBefore(text,el.nodeValue);
tt+=finalprice;
ppp.innerHTML=tt.toFixed(2);
}


})
    })
}());

(function()
{
    const b=document.querySelector(".cart");
    const box=document.querySelector(".cart-box");
    b.addEventListener('click',function()
    {
box.classList.toggle("show-box");

    })
}())
function cl()
{
    var x=setInterval(fun,1500)
    function fun()
    {
        onetimecounter++;
        if(onetimecounter>1)
        {
           var pagebutton= document.getElementById("clicked");
        pagebutton.click();
        clearInterval(x);
        }
     
    }

}





