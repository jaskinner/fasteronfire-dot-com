import './scss'
import $ from 'jquery'
import './js'
// import 'jquery-scroll-lock'
import AOS from "aos/dist/aos"

(function () {
    // $('*').scrollLock();

    AOS.init({
        disable: 'mobile'
    })
})()

// $(window).on('load', function () {
//     if ($('div').is('.cta-overlay')) {
//         $('.cta-overlay').delay(500).fadeOut(800);
//     }
//
//     setTimeout(function () {
//         $('*').scrollLock('disable')
//     }, 1200);
//
// });

$('.nav-page-links a').click(function (e) {
    var anchor = $(this).attr('href');
    e.preventDefault();

    $.scrollTo(anchor, 400);
})

$(function () {
    $('.player-buttons button').click(function () {
        let $this = $(this);
        let playerBtn = $this.data('player');
        let playerBlock = $('.player-blocks');
        let player = playerBlock.find('#' + playerBtn)

        $('#music').find('.active').removeClass('active');

        player.addClass('active')
        $this.addClass('active')
    })

    $('.toggler').click(function () {
        $('#navbar').toggleClass('nav-open')
    })
})
