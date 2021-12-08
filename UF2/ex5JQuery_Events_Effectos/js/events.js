// 1 Scroll hacia al final
$(document).ready(function() {
    $(".down").click(function() {
        $('html, body').animate({
            scrollTop: $(".footer").offset().top
        }, 500);
    });
});
// 2 Disable right click
$(document).ready(function() {
    $("body").on("contextmenu",function(){
       return false;
    }); 
});
// 3 submit disable hasta acceptaar checkbox
$(document).ready(function() {
    $(".check").click(function(){
        if ($(this).is(":checked")){
            $(".submit").removeAttr("disabled");
        }else{
            $(".submit").attr("disabled", "disabled");
        }
    }); 
});
// 4 text intermiten
function blink(){
    var color="#FF00FF,#FF00CC,#FF0099,#FA9066,#FF0033,#FF0000";
    color=color.split(",");
    $(".blink").css('color',color[parseInt(Math.random()*color.length)]);
}
setInterval("blink()",200);
// 5 liimit caracter
$(document).ready(function() {
    var maxLength = 15;
    $('#textarea').keyup(function() {
        var textlen = maxLength - $(this).val().length;
        $('#rchars').text(textlen);
    });
});
// 6 mostrar tipo clikcs
// $("body").click(function(){
//     console.log("one click");
// });
$(document).ready(function() {
    $("body").dblclick(function(){
        console.log("doble click");
    });
    $('body').mousedown(function(event) {
        switch (event.which) {
            case 1:
                console.log('Left Mouse button pressed.');
                break;
            case 2:
                console.log('Middle Mouse button pressed.');
                break;
            case 3:
                console.log('Right Mouse button pressed.');
                break;
            default:
                console.log('You have a strange Mouse!');
        }
    });
});

// 7 Deshabilitar link
$(document).ready(function() {
    $( '.dislink' ).click(function() {
        $( ".dislink" ).removeAttr( 'href' );
    });
});
// 8 els segons entre click
$(document).ready(function() {
    $(".clik_segons").click(function(event) {
        $(".segons").text(event.timeStamp);
    });
});
// 9 pelota rebotando
i=0;
$(document).ready(function(){
    $(".tirar").click(function(){
        // vuelve al punto de arriba
        $('.pilota').animate({
            marginLeft: 0,
            marginTop: 0,
        });
        // 'x' margin top aumenta,  'y' margin top disminuie,  'z' margin left
        function animacion(x=600,y=400,z=10) {
            //termina cuando estan los valores por defecto al 0 i como la llamada de abajo lo vamos restando se puede calcular para que haga 3 veces
            if (x>0 && y>=0) {
                // baja 
                $('.pilota').animate({
                    marginLeft: '+='+z,
                    marginTop: '+='+x,
                    //velocidad de la animacion
                }, 400, function() {
                //sube
                $('.pilota').animate({
                    // marginLeft: '+='+z,
                    marginTop: '-='+y,
                }, 500, function() {
                    //lo vuelve a llamar para repetirlo pero con los valores un poco mas bajos y mas a la derecha
                    animacion(x-=200,y-=200,z+=10)     
                });
                });
            }
        }
        animacion();
    });
});