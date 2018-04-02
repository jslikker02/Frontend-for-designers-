var body = document.querySelector('body');
var section = document.querySelector('section');
var img = document.querySelector('img');
var main = document.querySelector('main');
var header = document.querySelector('header');
var requestURL = 'http://dennistel.nl/movies';

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

