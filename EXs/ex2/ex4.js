/*Fes una funció Javascript que donada una cadena de text: “abska” retorni la cadena ordenada alfabèticament. 
(Fes una mica de trampa i investiga per internet)*/

let params="abska";

function sort(params) {
    console.log(params.split("").sort().join(""));
}

sort(params);