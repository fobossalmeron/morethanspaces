
var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: .13}});

var logoScene = new ScrollMagic.Scene({triggerElement: "#homevideo", offset:0})
        .setClassToggle("nav", "navScroll")
        .addTo(controller);
