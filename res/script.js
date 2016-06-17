$(function() {
  
  $.get("header.html", html => $("header").html(html));
  $.get("footer.html", html => $("footer").html(html));
  $.get("res/style.css", css => $("head").append("<style>" + css + "</style>"));

});
