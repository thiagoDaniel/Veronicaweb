$(document).ready(function () {

	$('#form-check').validate({

		rules:{
			nome:{
				required: true,
				minlength: 3
			},
			email:{
				required: true,
				email: true
			},
			telefone:{
				required: true,
				minlength: 14,
				maxlength: 16
			},
			question:{
				required: true
			},
			mensagem:{
				required: true,
				minlength: 5
			},
			// if orçamento
			local:{
				required: function (element) {
					 if($("#orcamento").is(':checked')){
							 return true;
					 }
					 else
					 {
							 return false;
					 }
				},
			},
			data:{
				required: function (element) {
					 if($("#orcamento").is(':checked')){
							 return true;
					 }
					 else
					 {
							 return false;
					 }
				},
				minlength: 10,
				maxlength: 10
			},
			'servicos[]':{
				required: function (element) {
					 if($("#orcamento").is(':checked')){
							 return true;
					 }
					 else
					 {
							 return false;
					 }
				}
			},
		},

		messages:{
			nome:{
				required: "Campo obrigatório.",
				minlength: "No mínimo 3 caracteres."
			},
			email:{
				required: "Campo obrigatório.",
				email: "Insira um e-mail válido."
			},
			telefone:{
				required: "Campo obrigatório.",
				minlength: "Telefone inválido.",
				maxlength: "Telefone inválido."
			},
			question:{
				required: "Obrigatório."
			},
			mensagem:{
				required: "Campo obrigatório.",
				minlength: "No mínimo 5 caracteres."
			},
			// if orçamento
			local:{
				required: "Campo obrigatório.",
				minlength: "No mínimo 4 caracteres."
			},
			data:{
				required: "Campo obrigatório.",
				minlength: "Data inválida.",
				maxlength: "Data inválida."
			},
			'servicos':{
				required: "Campo obrigatório."
			},
			// if orçamento
		},

		onfocusout: function(element) {
			this.element(element);
		},

	});


	$("#form-check").submit(function(){

		var validator = $("#form-check").validate();

		if(validator.form() == true){

			var radio = $('input[type=radio][name=assunto]:checked').val();

			if(radio == 'Orçamento'){
				var link = "/wp-content/themes/elenoliveira/form/form-orc.php";
			}
			else{
				var link = "/wp-content/themes/elenoliveira/form/form.php"; 
			}

			$.ajax({
			type: "POST",
			url: link,
			data: $(this).serializeArray(),
			}).done(function(msg){
				alert(msg);
			 });
			return false;

		}

	});

});