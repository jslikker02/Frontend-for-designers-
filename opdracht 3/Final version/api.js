// Hier koppel ik de elementen uit de html aan variabelen zodat ik deze later kan oproepen. Ook doe ik de oproep richting de link van de api.
var body = document.querySelector('body');
var section = document.querySelector('section');
var article = document.querySelector('article');
var img = document.querySelector('img');
var main = document.querySelector('main');
var header = document.querySelector('header');
var mijnfilterbutton = document.querySelectorAll('nav button');
var mijna = document.querySelector('.prev');
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

console.log(request);

request.onload = function () {
    var jsonh2 = request.response;
    vuldeh2(jsonh2);
}

// Hier maak ik de articles aan waarin ik later alle elementen ga plaatsen die de informatie van de films bevat uit de api.
function vuldeh2(jsonh2) {
    for (var i = 0; i < jsonh2.length; i++) {
        var mijnarticle = document.createElement('article');
        mijnarticle.classList.add("mystyle");

        // hieronder maak ik de variabelen aan en geef ik aan welk element daarbij moet worden aangemaakt zodat ik deze straks kan oproepen wanneer deze elementen getoond moeten worden.
        var mijnh2 = document.createElement('h2');
        var mijnh3 = document.createElement('h3');
        var mijnimg = document.createElement('img');
        var mijnpar = document.createElement('p');
        var buttontekst = document.createElement('h4');
        var mijnpar2 = document.createElement('p');
        var mijnpar22 = document.createElement('p');
        var mijnpar3 = document.createElement('h3');
        var mijnbutton = document.createElement('button');


// Hier maak ik het onderdeel aan dat onderaan mijn articles moet staan. Ik maak een paragraph element aan en voeg daar de juiste data vanuit de api in.
        var acteurs = jsonh2[i].actors;
        for (var j = 0; j < acteurs.length; j++) {
            var acteursinfo = document.createElement('p');
            acteursinfo.classList.add('actors');
            acteursinfo.textContent = acteurs[j].actor_name;
            mijnpar22.classList.add('actors');
            mijnpar22.textContent = jsonh2[i].genres;
        };

// Hier geef ik aan welke data vanuit de api in de elementen geladen moet worden.
        mijnh2.textContent = jsonh2[i].title;
        mijnimg.src = jsonh2[i].cover;
        mijnpar.textContent = jsonh2[i].plot;
        buttontekst.textContent = ('Toon meer info');
        mijnpar2.textContent = ('test');
        mijnh3.textContent = ('Actors:');


// Hieronder plaats ik de elementen die de inhoud van de api bevatten in de verschillende articles. Zodat iedere article dezelfde structuur heeft maar met gepersonaliseerde data.
        mijnarticle.appendChild(mijnh2);
        mijnarticle.appendChild(mijnimg);
        mijnarticle.appendChild(mijnbutton);
        mijnarticle.appendChild(mijnpar);
        mijnarticle.appendChild(mijnh3);
        mijnarticle.appendChild(acteursinfo);
        mijnarticle.appendChild(mijnpar22);
        section.appendChild(mijnarticle);

        // Dit is de button die de gebruiker kan aanklikken om de articles te laten uitklappen. Dit doe ik vanuit de css. De button activeert de state van hidden naar zichtbaar.
        mijnbutton.appendChild(buttontekst);
        mijnbutton.onclick = function () {
            //var klapuit = document.querySelectorAll('.mystyle');
            console.log(this);
            this.parentElement.classList.toggle('active');

            // Hieronder maak ik de filterfunctie. De interface is gebasseerd op de categorieen waarop je kan filteren en door op deze te klikken filtert de site de films. Dit doet de site doordat een klik op die knop de verschillende article elementen die ik daaraan gekoppeld heb op hidden gooit. Dit zijn dan de films die niet op deze filtering slaan en daarom dus eruit gehaald worden.
}
            mijnfilterbutton[1].onclick = function () {
            var element = document.querySelectorAll("article");
                mijnfilterbutton[1].classList.toggle("down");
                element[0].classList.toggle("down");
            element[4].classList.toggle("down");
            element[5].classList.toggle("down");
}
            mijnfilterbutton[0].onclick = function () {
            var element = document.querySelectorAll("article");
            mijnfilterbutton[0].classList.toggle("down");
            element[0].classList.toggle("down");
            element[4].classList.toggle("down");
            element[5].classList.toggle("down");
}
             mijnfilterbutton[2].onclick = function () {
            var element = document.querySelectorAll("article");
                 mijnfilterbutton[2].classList.toggle("down");
            element[2].classList.toggle("down");
                element[3].classList.toggle("down");
}
            mijnfilterbutton[3].onclick = function () {
            var element = document.querySelectorAll("article");
            mijnfilterbutton[3].classList.toggle("down");
            element[1].classList.toggle("down");
            element[2].classList.toggle("down");
            element[3].classList.toggle("down");
            element[4].classList.toggle("down");
            element[5].classList.toggle("down");
}
            mijnfilterbutton[4].onclick = function () {
            var element = document.querySelectorAll("article");
            mijnfilterbutton[4].classList.toggle("down");
            element[1].classList.toggle("down");
            element[2].classList.toggle("down");
            element[0].classList.toggle("down");
            element[4].classList.toggle("down");
            element[5].classList.toggle("down");
}
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
// Hier wordt de functie gedeclareerd waarmee de slider werkt. De logica om de slider plus 1 of min 1 te geven.
    function fotocarousel(n) {
        var i;
        var fotos = document.getElementsByClassName("carousel");
        var bolletjes = document.getElementsByClassName("rondje");
        if (n > fotos.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = fotos.length
        }
        for (i = 0; i < fotos.length; i++) {
            fotos[i].style.display = "none";
        }
        for (i = 0; i < bolletjes.length; i++) {
            bolletjes[i].className = bolletjes[i].className.replace(" active", "");
        }
        fotos[slideIndex - 1].style.display = "block";
    }

    document.onkeydown = checkKey; // Hier wordt bepaald dat wanneer je klikt op het linker en rechter pijltje de functie onkeydown actief wordt, dus dat de slider 1 afbeelding verspringt.

    function checkKey(e) {
        if (e.keyCode == 37) {
            plusSlides(-1);
        }
        if (e.keyCode == 39) {
            plusSlides(1);
        }

    }
