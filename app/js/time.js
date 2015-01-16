(function() {
  var d = new Date();
  var hourCST = d.getUTCHours() - 6;
  var open = false;
  var closed = false;
  if ( hourCST >= 9 && hourCST <= 17 ) { open = true; }
  else { closed = true; }

  if ( open )
  {
    $('.hours__current--open').show();
    $('.hours__current--closed').hide();
  }
  else
  {
    $('.hours__current--open').hide();
    $('.hours__current--closed').show();
  }

})();
