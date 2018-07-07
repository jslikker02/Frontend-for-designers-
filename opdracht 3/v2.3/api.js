var body = document.querySelector('body');
var section = document.querySelector('section');
var article = document.querySelector('article');
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
var mijnarticle = document.createElement('article');
mijnarticle.classList.add("mystyle");

var mijnh2= document.createElement('h2');
var mijnh3= document.createElement('h3');
var mijnimg= document.createElement('img');
var mijnpar= document.createElement('p');
var buttontekst= document.createElement('h4');
var mijnpar2= document.createElement('p');
var mijnpar3= document.createElement('h3');
var mijnbutton= document.createElement('button');


var acteurs = jsonh2[i].actors;
for (var j =0; j < acteurs.length; j++){
var acteursinfo = document.createElement('p');
acteursinfo.classList.add('actors');
acteursinfo.textContent= acteurs[j].actor_name;
};


mijnh2.textContent =jsonh2[i].title;
mijnimg.src = jsonh2[i].cover;
mijnpar.textContent = jsonh2[i].plot;
buttontekst.textContent = ('Toon meer info');
mijnpar2.textContent = ('test');
mijnh3.textContent = ('Actors:');




mijnarticle.appendChild(mijnh2);
mijnarticle.appendChild(mijnimg);
mijnarticle.appendChild(mijnbutton);
mijnarticle.appendChild(mijnpar);
mijnarticle.appendChild(mijnh3);
mijnarticle.appendChild(acteursinfo);
section.appendChild(mijnarticle);

mijnbutton.appendChild(buttontekst);
mijnbutton.onclick = function() {
var klapuit = document.querySelectorAll('.mystyle','button');
    klapuit[0].classList.toggle('active');
    klapuit[1].classList.toggle('active');
    klapuit[2].classList.toggle('active');
    klapuit[3].classList.toggle('active');
    klapuit[4].classList.toggle('active');
    klapuit[5].classList.toggle('active');
}
}
}


