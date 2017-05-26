$(document).ready(function () {
    $('.save-btn').on('click', function () {
        var real = $('.real-link').val();
        var short = $('.short-link').val();
        if (real){
            $.post('/create-url', {real: real,short: short},function(){})
        } else {
            $('.real-link').parent().addClass('error')
        }
    })

    $('.real-link').on('focus', function () {
        $('.real-link').parent().removeClass('error')
    })
})