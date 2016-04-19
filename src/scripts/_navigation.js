$(function(){
  var curtain = $('<div class="nav--curtain">');
  curtain.prependTo('body > header');
  $('.nav--primary').clone().prependTo(curtain);
  $('.nav--curtain ul').removeClass('nav--primary');
  $('.menu--toggle').click(function() {
    $('.nav--curtain').toggleClass('active');
  });
});
