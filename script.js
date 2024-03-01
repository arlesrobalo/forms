$(document).ready(function(){
    // Aplicar máscaras de input
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#phone').mask('+00 (00) 00000-0000');
    $('#birthdate').mask('00/00/0000');
    $('#cnpj').mask('00.000.000/0000-00', {reverse: true});
    $('#pis').mask('000.00000.00-0', {reverse: true});

    // Inicializar o datepicker
    $('#birthdate').datepicker({
        dateFormat: 'dd/mm/yy',
        changeMonth: true,
        changeYear: true,
        yearRange: "-100:+0"
    });

    // Função para exibir as respostas na segunda tela
    function showConfirmation(responses) {
        $('#health-form').hide(); // Esconde o formulário original
        $('#confirmation-section').show(); // Mostra a seção de confirmação

        // Exibe as respostas no elemento com id 'responses'
        $('#responses').html(responses);
    }

    // Evento de envio do formulário
    $('#health-form').submit(function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        var formData = $(this).serialize(); // Obtém os dados do formulário

        // Envia os dados para o servidor
        $.ajax({
            type: 'POST',
            url: 'https://script.google.com/macros/s/AKfycbyNb5ZGU_9Mb4thYD5TbleOZeU_dMIiGtOh3cvm4VlhBA75FqsGY_5JsCpILjISk3su/exec',
            data: formData,
            dataType: 'json',
            success: function(response) {
                if (response.result === 'success') {
                    showConfirmation(formData); // Exibe a tela de confirmação com as respostas
                } else {
                    alert('Houve um erro ao enviar o formulário.');
                }
            },
            error: function() {
                alert('Houve um erro ao enviar o formulário.');
            }
        });
    });

    // Evento do botão 'Corrigir'
    $('#edit-button').click(function() {
        $('#health-form').show(); // Mostra novamente o formulário original
        $('#confirmation-section').hide(); // Esconde a seção de confirmação
    });
});
