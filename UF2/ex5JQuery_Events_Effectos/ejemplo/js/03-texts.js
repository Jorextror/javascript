'use strict';

$(document).ready(function(){
 //console.log("jQuery ready");
  reloadLinks();

  //alert("texts");
  $('#add_button').click(function(){
    //console.log($('#add_link').val());
    $('#menu').append('<li> <a href=http://'+$('#add_link').val()+"></a></li>");
    $('#add_link').val('');
    reloadLinks();

    // proveu append prepend i html i before i after

  })

  function reloadLinks(){
    $('a').each(function(index){
      var thiss = $(this);
      console.log(thiss);
      var enllas = thiss.attr("href"); 
      thiss.text(enllas);
      // els enllaços ens els obre en una pestanya nova
      thiss.attr('target','_blank');

  })}
  

    //console.log($(this).attr("href"));
    
  





});


















