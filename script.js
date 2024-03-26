$(document).ready(function () {
    $('#telefone').mask('(00) 0 0000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'insira o seu nome',
            email: 'insira seu e-mail',
            mensagem: 'deixe sua mensagem'
        },
        submitHandler: function (form) {

        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
        }
    })
})