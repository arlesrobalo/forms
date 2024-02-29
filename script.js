$(document).ready(function(){
  $('#health-form').submit(function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    var formData = $(this).serialize(); // Serializa os dados do formulário
    $.ajax({
      type: 'POST',
      url: $(this).attr('action'), // Usa a URL do atributo action do formulário
      data: formData,
      success: function(response) {
        // Converte a resposta para JSON, se ainda não estiver convertida
        var res = typeof response === 'string' ? JSON.parse(response) : response;
        if(res.result === "success") {
          alert("Formulário enviado com sucesso!");
          // Aqui você pode redirecionar o usuário ou limpar o formulário
          // window.location.href = "pagina_de_sucesso.html";
          // $('#health-form').trigger("reset");
        } else {
          alert("Houve um problema ao enviar o formulário.");
        }
      },
      error: function(error) {
        alert('Erro na comunicação com o servidor.');
      }
    });
  });
});
