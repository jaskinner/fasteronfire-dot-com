import './scss'
import $ from 'jquery'
import './js'
import AOS from "aos/dist/aos";

(function () {
    AOS.init({
        disable: 'mobile'
    })
})()

$('#navbar a').click(function (e) {
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
