
//$('#sidebar').height($(".nav").height());


$( document ).ready(function() {

  var sidebar = $("#sidebar"),
      topbarHeight = $("#top-section").height(),
      scrolling = false,
      backToTop = ['<a href="#doc-top" class="back-to-top"><span class="ion ion-chevron-up"></span><span class="sr-only">Up</span></a>'];

  $("body").append(backToTop);
  $(".back-to-top").hide();

  setTimeout(checkScrollbarPosition, 500);

  $("#navigation-bar a").on("click", function(){
    setTimeout(checkScrollbarPosition, 500);
  });

  $(window).on('resize', function(){
    if( !scrolling ) {
      (!window.requestAnimationFrame) ? setTimeout(checkScrollbarPosition, 300) : window.requestAnimationFrame(checkScrollbarPosition);
      scrolling = true;
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) { // Wenn 100 Pixel gescrolled wurde
			$('.back-to-top').fadeIn();
		} else {
			$('.back-to-top').fadeOut();
		}
  });

  function checkScrollbarPosition() {
    var h = $(window).height();
    if (sidebar.height() < (h-topbarHeight)) {
      if(!sidebar.hasClass("affix")) {
        sidebar.addClass("affix");
      }
    } else {
      if(sidebar.hasClass("affix")) {
        sidebar.removeClass("affix")
      }
    }
    scrolling = false;
  }

  // activate tooltips. although this is a bootstrap js function, it must be activated this way in your theme.
  $('[data-toggle="tooltip"]').tooltip({
      placement : 'top'
  });

  /**
   * AnchorJS
   */
  anchors.add('h2,h3,h4,h5');

});

// needed for nav tabs on pages. See Formatting > Nav tabs for more details.
// script from http://stackoverflow.com/questions/10523433/how-do-i-keep-the-current-tab-active-with-twitter-bootstrap-after-a-page-reload
$(function() {
    var json, tabsState;
    $('a[data-toggle="pill"], a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        var href, json, parentId, tabsState;

        tabsState = localStorage.getItem("tabs-state");
        json = JSON.parse(tabsState || "{}");
        parentId = $(e.target).parents("ul.nav.nav-pills, ul.nav.nav-tabs").attr("id");
        href = $(e.target).attr('href');
        json[parentId] = href;

        return localStorage.setItem("tabs-state", JSON.stringify(json));
    });

    tabsState = localStorage.getItem("tabs-state");
    json = JSON.parse(tabsState || "{}");

    $.each(json, function(containerId, href) {
        return $("#" + containerId + " a[href=" + href + "]").tab('show');
    });

    $("ul.nav.nav-pills, ul.nav.nav-tabs").each(function() {
        var $this = $(this);
        if (!json[$this.attr("id")]) {
            return $this.find("a[data-toggle=tab]:first, a[data-toggle=pill]:first").tab("show");
        }
    });
});
