$(function() {
  
  $.get("header.html", html => $("header").html(html));
  $.get("footer.html", html => $("footer").html(html));

});
