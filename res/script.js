$(function() {

  // set element variables
  var doc = $(document);
  var win = $(window);

  // document/window dimensions (whichever is larger)
  var docWidth = doc.width() > win.width() ? doc.width() : win.width();
  var docHeight = doc.height() > win.height() ? doc.height() : win.height();
  
  // reposition the footer
  var reposition = () => $("footer").css({ top: docHeight-$("footer").height()+$("footer").css("padding-top")*2 });
  win.resize(reposition);

  // get footer, header, and styles
  $.get("res/style.css", css => $("head").append("<style>" + css + "</style>"));
  $.get("header.html", html => $("header").html(html));
  $.get("footer.html", html => {
    $("footer").html(html)
    reposition();
  });


});
