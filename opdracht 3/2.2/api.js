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
  toonalles(jsonh2);


}
function vuldeh2(jsonh2){
for (var i = 0; i < jsonh2.length; i++){
var mijnarticle = document.createElement('article');

var mijnh2= document.createElement('h2');
var mijnimg= document.createElement('img');
var mijnpar= document.createElement('p');
var mijnpar1= document.createElement('p');
var mijnpar2= document.createElement('p');
var mijnpar= document.createElement('p');

mijnh2.textContent =jsonh2[i].title;
mijnimg.src = jsonh2[i].cover;
mijnpar.textContent = jsonh2[i].plot;



mijnarticle.appendChild(mijnh2);
mijnarticle.appendChild(mijnimg);
mijnarticle.appendChild(mijnpar);
section.appendChild(mijnarticle);
}
}

