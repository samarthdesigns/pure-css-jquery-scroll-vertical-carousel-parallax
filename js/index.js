$(document).ready(function(){
  $('.box').click(function(){
    $('.box').fadeOut(300);
    $(this).fadeIn(300);
    
     setTimeout(function(){
       $('.holder').addClass('add');
       $('.main').addClass('add');
       $('.box').addClass('adder');
     },1200);
      $( "body" ).scrollLeft( -3870 );
      
      setTimeout(function(){
        $('.details').fadeIn(100);
      },1800);
    
      $('.holdertext').fadeOut(400);

  })
})