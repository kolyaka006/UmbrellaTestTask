$(document).ready(function () {
    $('.save-btn').on('click', function () {
        var real = $('.real-link').val();
        var short = $('.short-link').val();
        if (real) {
            $.post('/create-url', {real: real, short: short}).then(function (res) {
                addLinks(res)
            }, function (err) {
                if (err.status == 350) {
                    $('.real-link').parent().addClass('error');
                    $('.error-real-link').addClass('fade');
                }
                if (err.status == 351) {
                    $('.short-link').parent().addClass('error');
                    $('.error-short-link').addClass('fade');
                }
            })
        } else {
            $('.real-link').parent().addClass('error');

        }
    });

    $('.real-link').on('focus', function () {
        $('.real-link').parent().removeClass('error');
        $('.error-real-link').removeClass('fade');
    });

    $('.short-link').on('focus', function () {
        $('.short-link').parent().removeClass('error');
        $('.error-short-link').removeClass('fade');
    })

    function addLinks(data) {
        var child = '<div class="m-t-10 m-b-10 animation-text fade"> ' +
            '<div>Real link: <a href="' + data.real + '">' + data.real + '</a></div>' +
            '<div>Short link: <a href="' + location.origin + '/' + data.short + '">' + location.origin + '/' + data.short + '</a></div>' +
            '</div>'
        $('.list-links').append(child)
    }
})