var main = document.querySelector('main');
var header = document.querySelector('header');
var requestURL = 'http://dennistel.nl/movies/1';

var request = new XMLHttpRequest();
request.open('GET',requestURL)

request.responseType = 'json';
request.send();

console.log(request);

request.onload = function() {
  var titeltekst = request.response;
  vuldeh2(titeltekst);
  titeltekst(titeltekst);
}

function vuldeh2(jsonh2){
var mijnh2= document.createElement('h2');
mijnh2.textContent =jsonh2['title'];
main.appendChild(mijnh2);
}
console.log(mijnh2);








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

