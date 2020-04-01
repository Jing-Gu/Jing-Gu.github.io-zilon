$(document).ready(function() {
  AOS.init();

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

  //once click and go to each section, close the toggle menu by removing the class
  $("#menu a").click(function() {
    $("nav").removeClass("menu-active");
    $("#burger").removeClass("burger-active");
  });

  //sectionObserver for header changing styles
  const header = document.querySelector("header");
  const section = document.getElementById("slider");

  const sectionOptions = {
    rootMargin: "-160px 0px 0px 0px"
  };

  const sectionObserver = new IntersectionObserver(
    (entries, sectionObserver) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          header.classList.add("header-scrolled");
        } else {
          header.classList.remove("header-scrolled");
        }
      });
    },
    sectionOptions
  );

  sectionObserver.observe(section);

  //mouseover contact card
  const contact = document.getElementById("contact");
  contact.addEventListener("mouseover", () => {
    contact.classList.add("animated", "swing");
  });
});
