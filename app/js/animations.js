(function() {
  $('.home__services').waypoint(function() {
    $('.home__services--slide li:last-child').addClass('slide');
    $('.home__services--slide li:first-child').addClass('slide');
  }, { offset: '40%' });

  $('.home__services').waypoint(function() {
    $('.home__services li').addClass('scale');
  }, { offset: '40%' });
})();
