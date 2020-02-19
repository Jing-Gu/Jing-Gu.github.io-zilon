$(document).ready(function() {
  // CALL THE OWL PLUGIN
  $("#slider").owlCarousel({
    nav: true,
    items: 1,
    autoplay: true,
    loop: true,
    smartSpeed: 2500
  });

  // BURGER TOGGLE
  $("#burger").click(function() {
    $("nav").toggleClass("menu-active");
    $("#burger").toggleClass("burger-active");
  });
});
