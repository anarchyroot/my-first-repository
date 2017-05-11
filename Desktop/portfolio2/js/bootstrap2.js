/**
 * Created by matthewaltomare on 10/05/2017.
 */

$(function(){
    $(".dropdown").hover(
        function() {
            $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
        },
        function() {
            $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
        });
});

$(document).ready(function(){
    var i = -1;
    function nextMsg() {
        if(i === messages.length - 1){
            i = -1;
        }

        i++;

        $('#home-splash-content-text').html(messages[i]).fadeIn(500).delay(times[i]).fadeOut(500, nextMsg);


    }
// list of messages to display
    var messages = [
        "Shot By Matt",
        "SHOTBYMATT.COM",
        "PHOTOHGRAPHY BY:",
        "MATTHEW ALTOMARE",
    ];

//list of times
    var times = [
        1000,
        1000,
        1000,
        1000
    ];

// initially hide the message
    $('#home-splash-content-text').hide();

// start animation
    nextMsg();
});