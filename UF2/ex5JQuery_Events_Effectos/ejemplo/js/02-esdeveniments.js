'use strict';
$(document).ready(function(){
 //console.log("jQuery ready");

  //alert("Esdeveniments");
  var caixa = $("#caixa");
  console.log(caixa);
  
  caixa.mouseover(function () {
    $(this).css("background","yellowgreen");
  })
  caixa.mouseout(function () {
    $(this).css("background","green");
  })
  
  function cYG() {
    $(this).css("background","yellowgreen");
  }
  function cG() {
    $(this).css("background","green");
  }
  // Hover
  var caixa2 = $("#caixa2");
  caixa2.hover(cYG,cG);

  // click i dobleclick

  caixa.click(function(){
    $(this).css("background","blue");
    $(this).css("color","white");
  })

  caixa.dblclick(function(){
    $(this).css("background","pink");
    $(this).css("color","white");
  })

  // focus  i blur
  var nom = $("#nom");
  nom.focus(function(){
    $(this).css("border", "2px solid green" )
  });

  nom.blur(function(){
    $(this).css("border", "1px solid #ccc" );
    //console.log(($this).val());
   
    $("#dades").text( $(this).val()).show();

  });

  // mouse down i nouse up -> fer click i deixar

  var dades = $("#dades");
  dades.mousedown(function(){
    $(this).css("border-color", "red" );
  });

  dades.mouseup(function(){
    $(this).css("border-color", "gray" );
  });

  $(document).mousemove(function(){
    console.log(event.clientX,event.clientY);
    //var segueix =
    $('body').css("cursor","none");
    $("#segueix") .css("left",event.clientX)
                  .css("top",event.clientY);
  });
});


















