'use strict';
/*
1. Primers Passos
2. Selectors
3. Esdeveniments
4. Efectes 
5. AJAX
6. jQuery UI
7. Animacions
8. Plugins i widgets
9. Projecte JavaScript+ JQuery

jQuery és una llibreria de Javascript 
amb funcionalitats desenvolupades com:

efectes,
peticions AJAX,
comptatibilitat,
plugins per fer sliders, ...
encara es fa servir,
sobretot en projectes monolítics (back end i front end es troben junts)

SPA i Back END separat (Angular)

// https://code.jquery.com/

si fem

<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous">
</script>

ja tenim jQuery integrat

o bé el descarreguem en local i l'afegim com un script

diferències entre les versions

ver 1 bastant pesada (calia donar suport a tots els navegadors)
ver 2 elimina comptatibilitat amb versió IExplore 6,7 i 8  més lleugera
ver 3 afegeix suport a promeses, 
      altres funcionalitats i més comptaible amb HTML 5
*/

// comprovem que s'hagi carregat la pàgina

// $ equival a jQuery és un objecte
// el que posem després entre parèntesi serà el selector
// i després el mètode que vulguem (ready és un esdeveniment)

$(document).ready(function(){
  // console.log("jQuery ready");

// podem encadenar mètodes

  var vermell = $("#vermell") .css("background","red")
                              .css("color","white");
  console.log(vermell);

  // Canviar paràgraf  groc i verd anàlogament

// selectors de classe

var pColors = $(".pcolors");

console.log(pColors);
console.log(pColors[0]);
console.log(pColors.eq(0));

pColors.css("padding", "10px");

$(".sensev").click(function(){
  console.log("hem fet clic");
  $(this).addClass("pcolors");
});

//selecotrs d'etiqueta

var paragrafs=$('p');
console.log(paragrafs);
paragrafs.css("cursor", "pointer");
paragrafs.click(function() {
    var thiss =$(this);

    if (!thiss.hasClass("gran"))
      thiss.addClass("gran");
    else 
      thiss.removeClass("gran");
});

// selectors d'atribut

$('[title="google"]').css('background','#ccc');

// altres

// volem als enlaços i als paragrafs un marge superior

// $('p,a').addClass('marge-sup');

var cerca = $("#caixa").find('.marcat');
var caixaMarcat = $("#caixa .marcat");
console.log("Cerca---------------");
console.log(cerca);
console.log("Caixa Marcat---------------");
console.log(caixaMarcat);

var parepareCaixaMarcat = $("#el2").parent().parent().find('.marcat');
console.log(parepareCaixaMarcat);
});
// selectors de classe