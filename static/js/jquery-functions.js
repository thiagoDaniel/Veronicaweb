$(document).ready(function () {

	// MENU EFFECT

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll >= 100){
			$("#top").addClass("fixed");
		}else{
			$("#top").removeClass("fixed");
		}
	});

	// ROLAGEM NA POSTAGEM
	$("div#contacts .arrow.single").click(function(event){        
		event.preventDefault();
		$('html,body').animate({scrollTop:$('#post').offset().top - 70}, 800);
	});

	// MENU ANCHORS

	$('#menuanchor').on('click touchstart', function (e){
		$('nav#top').toggleClass('menuopen');
		$('nav#top #menuanchor span').text(function(i, text){
			return text === "MENU" ? "FECHAR" : "MENU";
		})
		$('nav#top #menuanchor i').toggleClass('fa-bars');
		$('nav#top #menuanchor i').toggleClass('fa-close');
		e.preventDefault();
	});

	// CONTACT FORM EFFECT 

	$('input[type=radio][name=assunto]').change(function() {
			if (this.value == 'Orçamento') {
					$('.form-control.orcar').css({
						'max-height': '400px',
						margin: '0 auto 10px auto'
					});
			}
			else if (this.value == 'Contato/Dúvida') {
					$('.form-control.orcar').css({
						'max-height': '0px',
						margin: '0 auto'
					});
			}
	});

	// VALIDATE FORMS

	$("#telefone").inputmask({
		mask: ["(99) 9999-9999", "(99) 9 9999-9999", ],
		keepStatic: true,
		showMaskOnHover: false,
		placeholder: ""
	});
	$("#data").inputmask({
		mask: ["99/99/9999", ],
		showMaskOnHover: false,
		placeholder: ""
	});

});