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
        })
    }


}

$('.email').on('focus', function () {
    $('.email').parent().removeClass('error');
})

$('.confirm').on('focus', function () {
    $('.confirm').parent().removeClass('error');
    $('.error-comfirm').removeClass('fade');
})

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
        $('.error-comfirm').addClass('fade');
        return
    }

    $.post('/registration/create-user', {email: email, password: password}).then(function (resp) {
        window.location.replace('/login')
    })

}

$('.email').on('focus', function () {
    $('.email').parent().removeClass('error');
})

$('.confirm').on('focus', function () {
    $('.confirm').parent().removeClass('error');
    $('.error-comfirm').removeClass('fade');
})
