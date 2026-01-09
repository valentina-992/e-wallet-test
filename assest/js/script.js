// Texto
$("#btnCambiarTxt").click(function () {
  $("#original").text("El texto se ha modificado desde Jquery!");
});

// Show/Hide y Fade
$("#btnToggleVisibilidad").click(function () {
  $("#cajaEfectos").toggle(400);
});

$("#btnFade").click(function () {
  if ($("#cajaEfectos").is(":visible")) {
    $("#cajaEfectos").fadeOut("slow");
  } else {
    $("#cajaEfectos").fadeIn("slow");
  }
});

// Slides
$("#btnSlideUp").click(function () {
  $("#cajaSlides").slideUp();
});

$("#btnSlideDown").click(function () {
  $("#cajaSlides").slideDown();
});

$("#btnSlideToggle").click(function () {
  $("#cajaSlides").slideToggle("fast");
});

// Animate y Scroll
$("#btnIrAbajo").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#final").offset().top,
    },
    1500
  );
});

$("#btnIrArriba").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});
