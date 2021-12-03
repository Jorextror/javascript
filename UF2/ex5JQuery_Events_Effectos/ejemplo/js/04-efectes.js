'use strict';

$(document).ready(function(){
 //console.log("jQuery ready");

 // fadeIn, fadeOut, fadeTo (opacitat 0 o 1) show, hide,
 // toggle,fadeToggle, slideToggle,slideUp,slideDown

  var caixa = $('#caixa');
  caixa.hide();
  $('#amaga').hide();

  $("#ensenya").click(function(){
    
    
    $(this).hide();
    $('#amaga').show();
    caixa.fadeIn('slow');
  })

  $("#amaga").click(function(){
    caixa.fadeOut('slow');
    $(this).hide();
    $('#ensenya').show();
  })

  $("#totenu").click(function(){
    caixa.toggle('fast');
  })

  $('#animam').click(function(){
    caixa.animate({
        marginLeft:'50px',
        fontSize:'40px',
        heigth: '110px;',
        
      }, 'slow')
        .animate({
          borderRadius: '900px',
          marginTop:'100px',
          


      },'slow')
        .animate({
          borderRadius: '100px',
          marginTop:'10px',
          marginLeft:'0px',
          fontSize:'20px',
        

    },'slow')
  })

});


















