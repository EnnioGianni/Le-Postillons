$(document) .ready (function () {
    var bt = $ ('.top');

 $(window).scroll (function() {
    if ($ (window).scrollTop ()> 150) {
        bt.addClass ('voirBt')
    } else {
        bt.removeClass ('voirBt')
    }
 });
});


  