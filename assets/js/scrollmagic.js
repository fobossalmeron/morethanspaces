
var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: .13}});

var logoScene = new ScrollMagic.Scene({triggerElement: "#homevideo", offset:0})
        .setClassToggle("nav", "navScroll")
        .addTo(controller);


var scrollScene = new ScrollMagic.Scene({duration: 200, triggerHook: "onLeave"})
            //.addIndicators()
            .addTo(controller);

// change behaviour of controller to animate scroll instead of jump
controller.scrollTo(function (newpos) {
      TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
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
