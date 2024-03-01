$(document).ready(function(){
  $('#health-form').submit(function(event) {
    event.preventDefault(); // Para evitar o envio direto do formulário

    var formData = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: 'URL_DA_WEB_APP',
      data: formData,
      dataType: 'json', // Espera-se que a resposta seja JSON
      success: function(response) {
        alert('Formulário enviado com sucesso!');
        // Aqui você pode redirecionar a página ou limpar o formulário
      },
      error: function(error) {
        alert('Houve um erro ao enviar o formulário.');
      }
    });
  });
});
