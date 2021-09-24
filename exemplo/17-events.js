'use strict';
/*
Esdeveniments
*/

// esdeveniments de ratolí



function canviarColor() {
    var fonsBoto = boto1.style.background;

    boto1.style.padding = "10px";
    boto1.style.border = "1px solid #ccc";

    if (fonsBoto == 'red') {
        boto1.style.background = "blue";
        
    } else {
        boto1.style.background = "red";
    }
    
}
//event click
var boto1 = document.querySelector("#boto1");
boto1.addEventListener('click',function() {
    canviarColor();
});

// event mouseover

boto1.addEventListener('mouseover',function() {
    boto1.style.background ="grey";
});
// event mouseout
boto1.addEventListener('mouseout',function() {
    boto1.style.background ="white";
});

var inputNom = document.querySelector("#campNom");

//focus
inputNom.addEventListener('focus',function(){
    console.log('focus->estàs a dins de l\'input');
});

//blur
inputNom.addEventListener('blur',function(){
    console.log('blur->estàs a fora de l\'input');
});

//keydown
inputNom.addEventListener('keydown',function(event){

   var key = event.key;
   console.log("KEYDOWN:tecla premuda :" + key);
    //console.log('keydown->has premut ',String.fromCharCode(event.keycode));
});

//keypress
inputNom.addEventListener('keypress',function(event){

    var key = event.key;
    console.log("KEYPRESS:tecla premuda :" + key);
     //console.log('keydown->has premut ',String.fromCharCode(event.keycode));
 });

/*
The KeyDown event is triggered when the user presses a Key.
The KeyUp event is triggered when the user releases a Key.
The KeyPress event is triggered when the user presses & releases 
a Key. (onKeyDown followed by onKeyUp)

Down happens first
Press happens second (when text is entered)
Up happens last (when text input is complete).

*/
//keyup

inputNom.addEventListener('keyup',function(event){

    var key = event.key;
    console.log("KEYUP:tecla deixada :" + key);
     //console.log('keydown->has premut ',String.fromCharCode(event.keycode));
 });
