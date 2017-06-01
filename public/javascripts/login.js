//LOGIN MODULE
function login() {
    // getting value from input
    var email = $('.login-email').val();
    var password = $('.login-password').val();
    // checking email not empty
    if (!email) {
        $('.login-email').parent().addClass('error');
    }
    // checking password not empty
    if (!password) {
        $('.login-password').parent().addClass('error')
    }
    // checking email and password not empty and get user token
    if (email && password) {
        $.get('/login/sign-in?email=' + email + '&password=' + password).then(function (resp) {
            localStorage.setItem('token', resp.token)
            window.location.replace('/')
        }, function(err){
            if (err.status = 401) {
                $('.error-login').addClass('fade');
            }
        })
    }
}

//REGISTRATION MODULE
function registration() {
    // getting value from input
    var email = $('.email').val();
    var password = $('.password').val();
    var confirm = $('.confirm').val();
    // checking email not empty
    if (!email) {
        $('.email').parent().addClass('error');
    }
    // checking password not empty
    if (!password) {
        $('.password').parent().addClass('error');
    }
    // checking a confirmation password
    if (password != confirm) {
        $('.confirm').parent().addClass('error')
        $('.error-confirm').addClass('fade');
        return
    }
    // checking email and password not empty and sending
    if (email && password) {
        $.post('/registration/create-user', {email: email, password: password}).then(function (resp) {
            window.location.replace('/login')
        })
    }
}


$(document).ready(function(){
    // registration page. Hide error
    $('.email').on('focus', function () {
        $('.email').parent().removeClass('error');
    })
    $('.password').on('focus', function () {
        $('.password').parent().removeClass('error');
    })

    $('.confirm').on('focus', function () {
        $('.confirm').parent().removeClass('error');
        $('.error-confirm').removeClass('fade');
    })

    // login page. Hide error
    $('.login-email').on('focus', function () {
        $('.login-email').parent().removeClass('error');
        $('.error-login').removeClass('fade');
    })

    $('.login-password').on('focus', function () {
        $('.login-password').parent().removeClass('error');
        $('.error-login').removeClass('fade');
    })
})

