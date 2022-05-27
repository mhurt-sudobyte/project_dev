
//gallery caret rotation
$(document).ready(function(){
  $("#gallery").click(function(){
    $("#gallery .fa-chevron-down").toggleClass("rotate180");
    $("#collapsegallery").stop().slideToggle(500);
  });
});
