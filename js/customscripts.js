$( document ).ready(function() {
  var sidebar = $("#sidebar"),
      topbarHeight = $("#top-section").height(),
      scrolling = false,
      backToTop = ['<a href="#doc-top" class="back-to-top"><span class="ion ion-chevron-up"></span><span class="sr-only">Up</span></a>'];

  $("#doc").append(backToTop);
  $(".back-to-top").hide();

  // first check after 300ms
  setTimeout(checkSidebarHeight, 300);

  // check sidebar if a click occurs on it
  $("#navigation-bar a").on("click", function(){
    setTimeout(checkSidebarHeight, 400);
  });

  $(window).on('resize', function(){
    // check sidebar if the user resized his browser
    if( !scrolling ) {
      (!window.requestAnimationFrame) ? setTimeout(checkSidebarHeight, 300) : window.requestAnimationFrame(checkSidebarHeight);
      scrolling = true;
    }
  });

  $(window).scroll(function () {
    // if user scrolled 300 Pixel
    if ($(this).scrollTop() > 300) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }

    if ($(this).scrollTop() > 150) {
      sidebar.css('top', '0');
    } else {
      sidebar.css('top', 'auto');
    }
  });

  // click on the back to top button
  $('.back-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

  // activate tooltips. although this is a bootstrap js function, it must be activated this way in your theme.
  $('[data-toggle="tooltip"]').tooltip({
      placement : 'top'
  });

  /**
   * AnchorJS
   */
  anchors.add('h2,h3,h4,h5');

  //checks the height of the sidebar and if it big enough it will be fixed
  function checkSidebarHeight() {
    if (sidebar.height() < $(window).height()-topbarHeight) {
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
});

// needed for nav tabs on pages. See Formatting > Nav tabs for more details.
// script from http://stackoverflow.com/questions/10523433/how-do-i-keep-the-current-tab-active-with-twitter-bootstrap-after-a-page-reload
/*$(function() {
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
*/
