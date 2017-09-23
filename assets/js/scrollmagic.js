

var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: .5}});

// instaQuoteButton
var instaScene = new ScrollMagic.Scene({triggerElement: "#products", duration: $('#products').height()*1.5})
        .setClassToggle( "#instaQuoteButton", "fadeOut")
        .addTo(controller);

// service section
var service1 = new ScrollMagic.Scene({triggerElement: ".service1", duration: $('.service1').height()*1.5, offset: -150})
        .setClassToggle( ".service1", "slideIn")
        .addTo(controller);
var service2 = new ScrollMagic.Scene({triggerElement: ".service2", duration: $('.service2').height()*1.5, offset:-100})
        .setClassToggle( ".service2", "slideIn")
        .addTo(controller);
var service3 = new ScrollMagic.Scene({triggerElement: ".service3", duration: $('.service3').height()*1.5, offset:-150})
        .setClassToggle( ".service3", "slideIn")
        .addTo(controller);
var service4 = new ScrollMagic.Scene({triggerElement: ".service4", duration: $('.service4').height()*1.5, offset:-100})
        .setClassToggle( ".service4", "slideIn")
        .addTo(controller);
var service5 = new ScrollMagic.Scene({triggerElement: ".service5", duration: $('.service5').height()*1.5, offset:-150})
        .setClassToggle( ".service5", "slideIn")
        .addTo(controller);
var service6 = new ScrollMagic.Scene({triggerElement: ".service6", duration: $('.service6').height()*1.5, offset:-100})
        .setClassToggle( ".service6", "slideIn")
        .addTo(controller);
var service7 = new ScrollMagic.Scene({triggerElement: ".service7", duration: $('.service7').height()*1.5, offset:-150})
        .setClassToggle( ".service7", "slideIn")
        .addTo(controller);

// clients

var client1 = new ScrollMagic.Scene({triggerElement: ".clientNike", offset:-100})
        .setClassToggle( ".clientNike", "fadeIn")
        .addTo(controller);
var client2 = new ScrollMagic.Scene({triggerElement: ".clientCocaCola", offset:-60})
        .setClassToggle( ".clientCocaCola", "fadeIn")
        .addTo(controller);
var client3 = new ScrollMagic.Scene({triggerElement: ".clientChanel", offset:-30})
        .setClassToggle( ".clientMoneyGram", "fadeIn")
        .addTo(controller);
var client4 = new ScrollMagic.Scene({triggerElement: ".clientMoneyGram", offset:-130})
        .setClassToggle( ".clientChanel", "fadeIn")
        .addTo(controller);
var client5 = new ScrollMagic.Scene({triggerElement: ".clientCapitalOne", offset:-90})
        .setClassToggle( ".clientCapitalOne", "fadeIn")
        .addTo(controller);
var client6 = new ScrollMagic.Scene({triggerElement: ".clientBaseF", offset:-60})
        .setClassToggle( ".clientBaseF", "fadeIn")
        .addTo(controller);
var client7 = new ScrollMagic.Scene({triggerElement: ".clientNovartis", offset:-160})
        .setClassToggle( ".clientNovartis", "fadeIn")
        .addTo(controller);
var client8 = new ScrollMagic.Scene({triggerElement: ".clientDiageo", offset:-120})
        .setClassToggle( ".clientDiageo", "fadeIn")
        .addTo(controller);
var client9 = new ScrollMagic.Scene({triggerElement: ".clientKraft", offset:-90})
        .setClassToggle( ".clientKraft", "fadeIn")
        .addTo(controller);
var client10 = new ScrollMagic.Scene({triggerElement: ".clientPepsico", offset:-190})
        .setClassToggle( ".clientPepsico", "fadeIn")
        .addTo(controller);
var client11 = new ScrollMagic.Scene({triggerElement: ".clientBMW", offset:-150})
        .setClassToggle( ".clientBMW", "fadeIn")
        .addTo(controller);
var client12 = new ScrollMagic.Scene({triggerElement: ".clientBoss", offset:-150})
        .setClassToggle( ".clientBoss", "fadeIn")
        .addTo(controller);

// change behaviour of controller to animate scroll instead of jump
controller.scrollTo(function (newpos) {
      TweenMax.to(window, 0.5, {scrollTo: {y: newpos + -60}});
      $(window).scrollTop($(window).scrollTop() + 1);
      $(window).scrollTop($(window).scrollTop() - 1);
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
