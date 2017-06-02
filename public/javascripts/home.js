// checking token in local storage
if (!localStorage.getItem('token'))
    window.location.replace('/login')
$(document).ready(function () {
    //getting user links
    $.ajax({
        url: '/get-all-links-user',
        type: 'get',
        headers: {
            token: localStorage.getItem('token')
        },
        dataType: 'json',
        success: function (res) {
            $.each(res, function (id, data) {
                addLinks(data);
            })
        },
        error: function (err) {
            if (err.status == 403) {
                window.location.replace('/login')
            }
        }
    });

// hiding error messages
    $('.real-link').on('focus', function () {
        $('.real-link').parent().removeClass('error');
        $('.error-real-link').removeClass('fade');
    });

    $('.short-link').on('focus', function () {
        $('.short-link').parent().removeClass('error');
        $('.error-short-link').removeClass('fade');
        $('.error-short-invalid').removeClass('fade');
    })
})

// function for getting pair original and short link
function getShortLink() {
    // getting value from input
    var real = $('.real-link').val();
    var short = $('.short-link').val();
    // regex for only number and letters
    var regex = /^[0-9a-zA-Z]+$/;

    if (real) {
        if (short.match(regex)) {
            $.notify('Send data', 'info');
            $.ajax({
                url: '/create-url',
                type: 'post',
                data: {real: real, short: short},
                headers: {
                    token: localStorage.getItem('token')
                },
                dataType: 'json',
                success: function (res) {
                    addLinks(res);
                    $.notify('Link added', 'success');
                },
                error: function (err) {
                    if (err.status == 350) {
                        $('.real-link').parent().addClass('error');
                        $('.error-real-link').addClass('fade');
                    }
                    if (err.status == 351) {
                        $('.short-link').parent().addClass('error');
                        $('.error-short-link').addClass('fade');
                    }
                    if (err.status == 403) {
                        $.notify('The token is not valid', 'error')
                        window.location.replace('/login')
                    }
                }
            });
        } else {
            $('.short-link').parent().addClass('error');
            $('.error-short-invalid').addClass('fade')
        }
    } else {
        $('.real-link').parent().addClass('error');

    }
}

// Add DOM element with pair original and short link
function addLinks(data) {
    var child = '<div class="m-t-10 m-b-10 animation-text fade">' +
        '<div>Real link: <a href="' + data.real + '">' + data.real + '</a></div>' +
        '<div>Short link: <a href="' + location.origin + '/' + data.short + '">' + location.origin + '/' + data.short + '</a></div>' +
        '<div>Count:' + data.count || 0 + '</a></div>' +
        '</div>'
    $('.list-links').append(child)
}

// log out
function logOut() {
    localStorage.clear();
    window.location.replace('/login')
}