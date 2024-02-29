$(document).ready(function(){
  $('#health-form').submit(function(event) {
    event.preventDefault(); // Para evitar o envio direto do formulário

    var formData = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: 'https://script.google.com/macros/s/AKfycbzwgcPGZ1vv0ngobq70eGVuoGh8WOU7KulLoFw8kZHOI6Zadg9Lum1dYK-w5p2SS4wv/exec',
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
