var body = document.querySelector('body');
var section = document.querySelector('section');
var article = document.querySelector('article');
var img = document.querySelector('img');
var main = document.querySelector('main');
var header = document.querySelector('header');
var mijnfilterbutton = document.querySelectorAll('nav button');
var requestURL = 'http://dennistel.nl/movies';

var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

console.log(request);

request.onload = function () {
    var jsonh2 = request.response;
    vuldeh2(jsonh2);
}

function vuldeh2(jsonh2) {
    for (var i = 0; i < jsonh2.length; i++) {
        var mijnarticle = document.createElement('article');
        mijnarticle.classList.add("mystyle");

        var mijnh2 = document.createElement('h2');
        var mijnh3 = document.createElement('h3');
        var mijnimg = document.createElement('img');
        var mijnpar = document.createElement('p');
        var buttontekst = document.createElement('h4');
        var mijnpar2 = document.createElement('p');
        var mijnpar22 = document.createElement('p');
        var mijnpar3 = document.createElement('h3');
        var mijnbutton = document.createElement('button');



        var acteurs = jsonh2[i].actors;
        for (var j = 0; j < acteurs.length; j++) {
            var acteursinfo = document.createElement('p');
            acteursinfo.classList.add('actors');
            acteursinfo.textContent = acteurs[j].actor_name;
            mijnpar22.classList.add('actors');
            mijnpar22.textContent = jsonh2[i].genres;
        };


        mijnh2.textContent = jsonh2[i].title;
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
        mijnarticle.appendChild(mijnpar22);
        section.appendChild(mijnarticle);

        mijnbutton.appendChild(buttontekst);
        mijnbutton.onclick = function () {
            //var klapuit = document.querySelectorAll('.mystyle');
            console.log(this);
            this.parentElement.classList.toggle('active');
}
            mijnfilterbutton[1].onclick = function () {
            var element = document.querySelectorAll("article");
                element[0].classList.toggle("down");
            element[4].classList.toggle("down");
            element[5].classList.toggle("down");
}
            mijnfilterbutton[0].onclick = function () {
            var element = document.querySelectorAll("article");
            element[0].classList.toggle("down");
            element[4].classList.toggle("down");
            element[5].classList.toggle("down");
}
             mijnfilterbutton[2].onclick = function () {
            var element = document.querySelectorAll("article");
            element[2].classList.toggle("down");
                element[3].classList.toggle("down");
}
            mijnfilterbutton[3].onclick = function () {
            var element = document.querySelectorAll("article");
            element[1].classList.toggle("down");
            element[2].classList.toggle("down");
            element[3].classList.toggle("down");
            element[4].classList.toggle("down");
            element[5].classList.toggle("down");
}
            mijnfilterbutton[4].onclick = function () {
            var element = document.querySelectorAll("article");
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
        bolletjes[slideIndex - 1].className += " active";
    }

    /*function antwoord() {
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

    function herstel() {
        var element = document.getElementById("watishet");
        element.innerHTML = "Veeg over de afbeelding voor toelichting";
    }*/
    document.onkeydown = checkKey;

    function checkKey(e) {
        if ((e.keyCode || e.which) == 37) {
            plusSlides(-1);
        }
        if ((e.keyCode || e.which) == 39) {
            plusSlides(1);
        }

    }
