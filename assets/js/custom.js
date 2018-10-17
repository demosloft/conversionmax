$( document ).ready(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });
});

$(".flexslider").html(function (i, html) {
    return html.replace(/&nbsp;/g, '');
});