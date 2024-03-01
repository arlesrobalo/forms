$(document).ready(function(){
  $('#health-form').submit(function(event) {
    event.preventDefault(); // Para evitar o envio direto do formulário

    var formData = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: 'https://script.google.com/macros/s/AKfycbyNb5ZGU_9Mb4thYD5TbleOZeU_dMIiGtOh3cvm4VlhBA75FqsGY_5JsCpILjISk3su/exec',
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
