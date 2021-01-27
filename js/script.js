setInterval(function(){
    $(".primero").hide(500);
    $(".segundo").show(500);
},3000);

setInterval(function(){
$(".primero").show(500);
$(".segundo").hide(500);
},6000);

//click buttom
function cambioColorBottom1(){
document.getElementById('btn1').style.background= '#DF7401';
document.getElementById('btn2').style.background= '#DF3A01';
document.getElementById('btn3').style.background= '#DF3A01';
document.getElementById('btn4').style.background= '#DF3A01';
}
function cambioColorBottom2(){
document.getElementById('btn2').style.background= '#DF7401';
document.getElementById('btn1').style.background= '#DF3A01';
document.getElementById('btn3').style.background= '#DF3A01';
document.getElementById('btn4').style.background= '#DF3A01';
}
function cambioColorBottom3(){
document.getElementById('btn3').style.background= '#DF7401';
document.getElementById('btn1').style.background= '#DF3A01';
document.getElementById('btn2').style.background= '#DF3A01';
document.getElementById('btn4').style.background= '#DF3A01';
}
function cambioColorBottom4(){
document.getElementById('btn4').style.background= '#DF7401';
document.getElementById('btn1').style.background= '#DF3A01';
document.getElementById('btn2').style.background= '#DF3A01';
document.getElementById('btn3').style.background= '#DF3A01';
}

