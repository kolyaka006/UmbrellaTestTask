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
        console.log('......resp', resp)
    })

}

$('.email').on('focus', function () {
    $('.email').parent().removeClass('error');
})

$('.confirm').on('focus', function () {
    $('.confirm').parent().removeClass('error');
    $('.error-comfirm').removeClass('fade');
})
