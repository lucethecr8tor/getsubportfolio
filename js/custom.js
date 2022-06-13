// $(document).ready(function() {
 
//   var owl = $("#owl-demo");
 
//   owl.owlCarousel({
     
//       itemsCustom : [
//         [0, 2],
//         [450, 3],
//         [600, 3],
//         [700, 3],
//         [1000, 4],
//         [1200, 4],
//         [1400, 4],
//         [1600, 4]
//       ],
//       navigation : true
 
//   });
 
// });

// $(document).ready(function() {
//   $(".testimonial-carousel").slick({
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: false,
//     arrows: true,
//     prevArrow: $(".testimonial-carousel-controls .prev"),
//     nextArrow: $(".testimonial-carousel-controls .next")
//   });
// });


// window.onscroll = function() {myFunctioned()};

// var header = document.getElementById("navigation");
// var sticky = header.offsetTop;

// function myFunctioned() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }



var myNav = document.getElementById("fixed-top");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};