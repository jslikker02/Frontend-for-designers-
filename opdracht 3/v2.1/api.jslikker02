var body = document.querySelector('body');
var section = document.querySelector('section');
var img = document.querySelector('img');
var main = document.querySelector('main');
var header = document.querySelector('header');
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

var request = new XMLHttpRequest();
request.open('GET',requestURL);

request.responseType = 'json';
request.send();

console.log(request);

request.onload = function() {
  var jsonh2 = request.response;
  vuldeh2(jsonh2);

}


function vuldeh2(jsonh2){
for (var i = 0; i < jsonh2.length; i++){
var mijnh2= document.createElement('h2');
mijnh2.textContent =jsonh2[i].title;
section.appendChild(mijnh2);

var mijnimg= document.createElement('img');
mijnimg.src = jsonh2[i].cover;
section.appendChild(mijnimg);

var mijnpar= document.createElement('p');
mijnpar.textContent = jsonh2[i].plot;
section.appendChild(mijnpar);
}
}









var slideIndex = 1;
fotocarousel(slideIndex);

function plusSlides(n) {
  fotocarousel(slideIndex += n);
}

function currentSlide(n) {
  fotocarousel(slideIndex = n);
}

function fotocarousel(n) {
  var i;
  var fotos = document.getElementsByClassName("carousel");
  var bolletjes = document.getElementsByClassName("rondje");
  if (n > fotos.length) {slideIndex = 1}
  if (n < 1) {slideIndex = fotos.length}
  for (i = 0; i < fotos.length; i++) {
      fotos[i].style.display = "none";
  }
  for (i = 0; i < bolletjes.length; i++) {
      bolletjes[i].className = bolletjes[i].className.replace(" active", "");
  }
  fotos[slideIndex-1].style.display = "block";
  bolletjes[slideIndex-1].className += " active";
}

function antwoord() {
   var element = document.getElementById("watishet");
element.innerHTML = "Amerikaanse vlag";
}
function antwoord1() {
   var element = document.getElementById("watishet");
element.innerHTML = "Grijze auto";
}
function antwoord2() {
   var element = document.getElementById("watishet");
element.innerHTML = "Helm met camera voor Goldengate bridge";
}
function herstel(){
  var element = document.getElementById("watishet");
element.innerHTML = "Veeg over de afbeelding voor toelichting";
}
document.onkeydown = checkKey;

function checkKey(e) {
    if ((e.keyCode || e.which) == 37)
    {
         plusSlides(-1);
}
    if ((e.keyCode || e.which) == 39)
    {
        plusSlides(1);
    }

}

