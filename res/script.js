$(function() {

  // set element variables
  var doc = $(document);
  var win = $(window);
  var foot = $("footer");
  
  // accessory functions
  var getPxValue = function(input) {
    return parseInt(input.substring(0, input.length-2));
  };

  // reposition the footer
  var docWidth, docHeight;
  var reposition = function() {
    foot.css({ top: docHeight-foot.height()-getPxValue(foot.css("padding-top"))*2 });
  };
  win.resize(function() {
    var footer = foot;
    foot.remove();
    docWidth = doc.width() > win.width() ? doc.width() : win.width();
    docHeight = doc.height() > win.height() ? doc.height() : win.height();
    $("body").append(footer);
    reposition();
    $("div#menu").css({ height: win.height() });
  });

  // get footer, header, and styles
  $("head").append("<link rel='stylesheet' type='text/css' href='res/fa.css' /><link rel='stylesheet' type='text/css' href='res/style.css' />");
  $.get("header.html", function(html) {
    $("header").html(html);
    // toggle menu
    $(".menuButton").click(function() { $("div#menu").toggleClass("hidden") });
    doc.on("click", "*", function(event) {
      event.stopPropagation();
      if(!$(this).is("div#head, div#head *, .menuButton") && !$("div#menu").hasClass("hidden"))
        $("div#menu").addClass("hidden");
    });
    win.resize();
  });
  $.get("footer.html", function(html) {
    $("footer").html(html);
    reposition();
    // popups to share
    $(document).on("click", ".shareButtonLink", function() {
      window.open($(this).attr("href"), "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=500");
      return false;
    });
    $("#facebookShareButton").attr({ href: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href) });
    $("#twitterShareButton").attr({ href: "https://twitter.com/intent/tweet?text=" + encodeURIComponent("Come visit at Nutmeg Bowl for the best bowling in Fairfield County! " + window.location.href) });
    $("#googlePlusShareButton").attr({ href: "https://plus.google.com/share?url=" + encodeURIComponent(window.location.href) });

    win.resize();
  });

});
