
var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: .5}});

var logoScene = new ScrollMagic.Scene({triggerElement: "#slider", offset:-300})
        .setClassToggle("nav", "navScroll")
        .addIndicators()
        .addTo(controller);

var quoteHeight = $('#quoteSection').height() + 500;

var instaQuoteButton = new ScrollMagic.Scene({triggerElement: "#quoteSection", duration: quoteHeight})
        .setClassToggle( "#instaQuoteAnchor", "fadeOut")
        //.addIndicators()
        .addTo(controller);

var scrollScene = new ScrollMagic.Scene({duration: 200, triggerHook: "onLeave"})
            //.addIndicators()
            .addTo(controller);

// change behaviour of controller to animate scroll instead of jump
controller.scrollTo(function (newpos) {
      TweenMax.to(window, 0.5, {scrollTo: {y: newpos + -60}});
});

//  bind scroll to anchor links
$(document).on("click", "a[href^='#']", function (e) {
    var id = $(this).attr("href");
    if ($(id).length > 0) {
    e.preventDefault();

    // trigger scroll
    controller.scrollTo(id);

    // if supported by the browser we can even update the URL.
    if (window.history && window.history.pushState) {
        history.pushState("", document.title, id);
      }
    }
  });
