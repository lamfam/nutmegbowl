$(function() {

  // set element variables
  var doc = $(document);
  var win = $(window);
  var foot = $("footer");
  
  // accessory functions
  var getPxValue = (input) => parseInt(input.substring(0, input.length-2));

  // reposition the footer
  var docWidth, docHeight;
  var reposition = () => foot.css({ top: docHeight-foot.height()-getPxValue(foot.css("padding-top"))*2 });
  win.resize(() => {
    var footer = foot;
    foot.remove();
    docWidth = doc.width() > win.width() ? doc.width() : win.width();
    docHeight = doc.height() > win.height() ? doc.height() : win.height();
    $("body").append(footer);
    reposition();
  }).resize();

  // get footer, header, and styles
  $("head").append("<link rel='stylesheet' type='text/css' href='res/fa.css' /><link rel='stylesheet' type='text/css' href='res/style.css' />");
  $.get("header.html", html => $("header").html(html));
  $.get("footer.html", html => {
    $("footer").html(html);
    reposition();
  });

  // popups to share
  $(".shareButtonLink").click(() => {
    window.open($(this).attr(href), "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");
    return false;
  });
  $("googlePlusShareButton").parent().attr({ href: "https://plus.google.com/share?url=" + encodeURI(window.location.href) });

});
