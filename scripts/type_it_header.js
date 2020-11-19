$(document).ready(function() {

    new TypeIt("#type-it", {
        speed: 100,
        loop: true,
        cursor: false
    })
        .delete()
        .pause(200)
        .type("administración")
        .pause(2500)
        .delete()
        .pause(200)
        .type("soporte")
        .pause(2500)
        .delete()
        .pause(200)
        .type("atención")
        .pause(2500)
        .delete()
        .pause(200)
        .type("asistencia")
        .pause(2500)
        .delete()
        .pause(200)
        .type("mensajería")
        .pause(2500)
        .go()

});