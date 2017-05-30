//LOGIN MODULE
function login() {
    var email = $('.login-email').val();
    var password = $('.login-password').val();
    if (!email) {
        $('.login-email').parent().addClass('error');
    }
    if (!password) {
        $('.login-password').parent().addClass('error')
    }
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
    var email = $('.email').val();
    var password = $('.password').val();
    var confirm = $('.confirm').val();
    if (!email) {
        $('.email').parent().addClass('error');
        return
    }
    if (password != confirm) {
        $('.confirm').parent().addClass('error')
        $('.error-confirm').addClass('fade');
        return
    }

    $.post('/registration/create-user', {email: email, password: password}).then(function (resp) {
        window.location.replace('/login')
    })

}


$(document).ready(function(){
    $('.email').on('focus', function () {
        $('.email').parent().removeClass('error');
    })

    $('.confirm').on('focus', function () {
        $('.confirm').parent().removeClass('error');
        $('.error-confirm').removeClass('fade');
    })

    $('.login-email').on('focus', function () {
        $('.login-email').parent().removeClass('error');
        $('.error-login').removeClass('fade');
    })

    $('.login-password').on('focus', function () {
        $('.login-password').parent().removeClass('error');
        $('.error-login').removeClass('fade');
    })
})

