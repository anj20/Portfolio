jQuery(document).ready(function ($) {
  "use strict";

  $(window).load(function () {
    // makes sure the whole site is loaded
    $(".seq-preloader").fadeOut(); // will first fade out the loading animation
    $(".sequence").delay(500).fadeOut("slow"); // will fade out the white DIV that covers the website.
  });

  $(function () {
    var $body = $("body");
    var currSlide = 0;
    var $slides = $(".slides");
    var $slide = $(".slide");

    function showSlide(n) {
      // n is relative position from current slide

      // increment slide number by n and keep within boundaries
      currSlide = Math.min(Math.max(0, currSlide + n), $slide.length - 1);

      var displacment = window.innerWidth * currSlide;
      // translate slides div across to appropriate slide
      $slides.css("transform", "translateX(-" + displacment + "px)");
      // delay before rebinding event to prevent retriggering
      setTimeout(bind, 700);
    }

    function bind() {
      $body.bind("false", mouseEvent);
    }

    $("nav a, .main-btn a").click(function (e) {
      // When link clicked, find slide it points to
      var newslide = parseInt($(this).attr("href")[1]);
      // find how far it is from current slide
      var diff = newslide - currSlide - 1;
      showSlide(diff); // show that slide
      e.preventDefault();
    });

    $(window).resize(function () {
      // Keep current slide to left of window on resize
      var displacment = window.innerWidth * currSlide;
      $slides.css("transform", "translateX(-" + displacment + "px)");
    });
  });
});
