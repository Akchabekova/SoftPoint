
 AOS.init();

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items: 4,
      loop: true,
      margin: 40,
      dots: true,
      responsive: {
          1200: {
              items: 4
          },
          768:{
              items: 2
          },
          320:{
              items: 1
          }
      }
  });
 });