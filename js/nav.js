
var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: .13}});

var logoScene = new ScrollMagic.Scene({triggerElement: "#blacksection", offset:100})
        .setClassToggle("nav", "darknav")
        .addTo(controller);
