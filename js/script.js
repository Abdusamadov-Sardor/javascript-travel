alert("Assalomu alaykum dam olishga yaxshi borib keling!")
var enterMoney = Number(parseInt(prompt("Pul miqdorini kiriting").trim()));

var elSpan = document.querySelector(".span")
 var go =  "Safarga yaxshi borib keling"
var step =  "Uzr sizning pulingiz safarga yetmaydi!"

if(enterMoney >= 100){
 elSpan.textContent = go
 console.log(go);
}else{
  elSpan.textContent = step;
  console.log(step);
  }

