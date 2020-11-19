$(document).ready(function() {

    new TypeIt("#type-it", {
        strings: "¿Buscas personal <span>administrativo</span>?",
        speed: 70,
        cursor: false
    })
        .go();

});