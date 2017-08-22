

var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: .5}});

//Navigation
var logoScene = new ScrollMagic.Scene({triggerElement: "#slider", offset:-300})
        .setClassToggle("nav", "navScroll")
        //.addIndicators()
        .addTo(controller);

//instaQuote button
var instaQuoteButton = new ScrollMagic.Scene({triggerElement: "#quoteSection", duration: $('#quoteSection').height()})
        .setClassToggle( "#instaQuoteAnchor", "fadeOut")
        //.addIndicators()
        .addTo(controller);

// service section
var service1 = new ScrollMagic.Scene({triggerElement: ".service1", duration: $('.service1').height() + 50})
        .setClassToggle( ".service1", "slideIn")
        .addTo(controller);
var service2 = new ScrollMagic.Scene({triggerElement: ".service2", duration: $('.service2').height() + 50, offset:50})
        .setClassToggle( ".service2", "slideIn")
        .addTo(controller);
var service3 = new ScrollMagic.Scene({triggerElement: ".service3", duration: $('.service3').height()+ 50 })
        .setClassToggle( ".service3", "slideIn")
        .addTo(controller);
var service4 = new ScrollMagic.Scene({triggerElement: ".service4", duration: $('.service4').height() + 50, offset:50})
        .setClassToggle( ".service4", "slideIn")
        .addTo(controller);
var service5 = new ScrollMagic.Scene({triggerElement: ".service5", duration: $('.service5').height()+ 50 })
        .setClassToggle( ".service5", "slideIn")
        .addTo(controller);
var service6 = new ScrollMagic.Scene({triggerElement: ".service6", duration: $('.service6').height() + 50, offset:50})
        .setClassToggle( ".service6", "slideIn")
        .addTo(controller);
var service7 = new ScrollMagic.Scene({triggerElement: ".service7", duration: $('.service7').height() + 50})
        .setClassToggle( ".service7", "slideIn")
        .addTo(controller);

var service7 = new ScrollMagic.Scene({triggerElement: ".sliderCard", duration: $('.sliderCard').height() + 100})
        .setClassToggle( ".sliderCard", "fadeIn")
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
