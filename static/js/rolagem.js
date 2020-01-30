$(document).ready(function () {

	function removerMenu(){
		$('nav#top').removeClass('menuopen');
		$('nav#top #menuanchor i').addClass('fa-bars');
		$('nav#top #menuanchor i').removeClass('fa-close');
		$('nav#top #menuanchor span').text('MENU');
	}

	// ROLAGEM SUAVE
	$("a[href*=#quemsou]").click(function(event){        
		event.preventDefault();
		removerMenu();
		$('html,body').animate({scrollTop:$(this.hash).offset().top - 80}, 800);
	});
	$("a[href*=#servicos]").click(function(event){        
		event.preventDefault();
		removerMenu();
		$('html,body').animate({scrollTop:$(this.hash).offset().top - 130}, 800);
	});
	$("a[href*=#trabalhos]").click(function(event){        
		event.preventDefault();
		removerMenu();
		$('html,body').animate({scrollTop:$(this.hash).offset().top - 70}, 800);
	});
	$("a[href*=#contato]").click(function(event){        
		event.preventDefault();
		removerMenu();
		$('html,body').animate({scrollTop:$(this.hash).offset().top - 70}, 800);
		$('input[type=radio][id=contatoduvida]').click();
	});
	$("a#orcar").click(function(event){        
		event.preventDefault();
		removerMenu();
		$('html,body').animate({scrollTop:$(this.hash).offset().top - 70}, 800);
		$('input[type=radio][id=orcamento]').click();
	});
	$("a[href*=#home]").click(function(event){        
		event.preventDefault();
		removerMenu();
		$('html,body').animate({scrollTop:$(this.hash).offset().top - 0}, 800);
	});
	$("div#contacts .arrow").click(function(event){        
		event.preventDefault();
		removerMenu();
		$('html,body').animate({scrollTop:$('#trabalhos').offset().top - 70}, 800);
	});

});