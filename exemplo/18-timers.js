'use strict';

//timers

window.addEventListener('load', function() {
    
    // en interval

    function interval() {

        var temps = setInterval(function(){
            console.log("Set Interval executat");
    
            var capsalera = document.querySelector("h1");
            if (capsalera.style.fontSize == "50px") {
                capsalera.style.fontSize = "30px";
            } else {    
                capsalera.style.fontSize ="50px";
            }
            
        },2000);

        return temps;
  
    }

    var temps = interval();

    // només una vegada després d'un temps
    var temps2 = this.setTimeout(function(){
        console.log("Set Interval executat");

        var capsalera = document.querySelector("h1");
        capsalera.style.color = "pink";
            
    },5000);

    // parem l'interval  de temps
    var stop = document.querySelector("#stop");

    stop.addEventListener("click", function() {
        alert("Has aturat l'interval");
        clearInterval(temps);
    });

    var start = document.querySelector("#start");
    start.addEventListener("click", function() {
        interval();
    });






});

