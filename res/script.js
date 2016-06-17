$(function() {

  // set element variables
  var doc = $(document);
  var win = $(window);

  // document/window dimensions (whichever is larger)
  var docWidth = doc.width() > win.width() ? doc.width() : win.width();
  var docHeight = doc.height() > win.height() ? doc.height() : win.height();
  
  // get footer, header, and styles
  $.get("header.html", html => $("header").html(html));
  $.get("footer.html", html => $("footer").html(html).css({ top: docHeight-$(this).height() }));
  $.get("res/style.css", css => $("head").append("<style>" + css + "</style>"));

});
