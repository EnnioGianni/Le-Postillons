$(document) . ready(function() {
    var bt = $ ('.haut');
    $ (window).scroll (function() {
        if ($(window).scrollTop () > 100){
           bt.addClass ('voirBt'); 
        } else {
            bt.removeClass ('voirBt');
        }
    });
    bt.on ('click', function () {
        $ ('html, body').animate({scrollTop:0}, '250');
    });
});