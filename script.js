$('.dropdown-toggle').dropdown()

$(document).ready(function(){
  $(".navbarscroll").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
  });
});