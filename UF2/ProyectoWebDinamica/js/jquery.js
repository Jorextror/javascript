// slider
$(document).ready(function(){
    $('.slider').bxSlider();
  });
// api 
// https://ichi.pro/es/una-lista-seleccionada-de-100-api-publicas-geniales-y-divertidas-para-inspirar-su-proximo-proyecto-8109114517939
// https://www.songsterr.com/a/wa/api/?ref=apilist.fun
fetch("https://currency-exchange.p.rapidapi.com/listquotes", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "currency-exchange.p.rapidapi.com",
		"x-rapidapi-key": "b6feabb1e7msh790f2068297f689p101701jsnce9f79dd702f"
	}
})
.then(response => {
    console.log(response)
    // document.write(response)

})
.catch(err => {
	console.error(err);
});

// anar al principi
$(document).ready(function() {
    $(".down").click(function() {
        $('html, body').animate({
            scrollTop: $(".footer").offset().top
        }, 500);
    });
});