import './scss'
import $ from 'jquery'
import './js'

$(function () {
    // deezer fix
    setTimeout(function () {
        $('#deezer-player').removeClass('active')
        $('#apple-player').addClass('active')
    }, 500)

    $('.player-buttons button').click(function () {
        let $this = $(this);
        let playerBtn = $this.data('player');
        let playerBlock = $('.player-blocks');
        let player = playerBlock.find('#' + playerBtn)

        $('#music').find('.active').removeClass('active');

        player.addClass('active')
        $this.addClass('active')
    })
})
