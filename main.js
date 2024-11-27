var button =document.getElementById("btn");//accesing

// onclick

button.onclick =function(){
    alert("Hello prej klases tone!");
}


 // var button1 =document.querySelector("button");
 //menyra e dyte e qasjes me querySelector.

var button1 = document.getElementById("btn1")
var button1 = document.getElementById("btn2")
var button1 = document.getElementById("btn3")

//eventet

button1.onmouseleave =function(){
    alert("Ti sapo me le mua")
}

button1.onmouseleave =function(){
    alert("Ti nuk po me le rehat")
}

button1.onmouseleave =function(){
    alert("Ti sapo solle rroten e mausit")
}

buttoni.onclick =function (){
    console.log("E perfundova detyren");
}

var buttoni1 = document.getElementById("buttoni1");

var texti1 =document.getElementById("Texti");

buttoni1.onclick = function(){
     texti1.style.color = "blue";
     texti1.style.fontSize = "50px";
     texti1.style.background ="gray";
     texti1.style.textAlign ="center";
}

buttoni2.onclick=function(){
    texti1.style.color = "";
    texti1.style.fontSize = "";
    texti1.style.transition ="0.5s ease in";
    texti1.style.background ="";
    texti1.style.textAlign ="";
}

var buttoni3 =document.getElementById("buttoni3");

buttoni3.onlick = function(){
    texti1.setAttribute('class','test' )
}

var buttoni4 =document.getElementById("buttoni4");

buttoni4.onclick = function(){
   texti1.setAttribute('class','test1');
}
  




