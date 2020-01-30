jQuery(document).ready(function($) {

	// O número da próxima página que será carregada (/page/x/).
	var pageNum = parseInt(skrow_mpa.startPage) + 1;
	
	// O número máximo de páginas que o JS pode retornar.
	var max = parseInt(skrow_mpa.maxPages);
	
	// O link da próxima página de posts.
	var nextLink = skrow_mpa.nextLink;
	
	/* Substitua a navegação tradicional pela sua própria, caso necessário. */

	if(pageNum <= max) {
		// Local onde será adicionado o link para "Carregar Mais Posts".
		$('#moreposts')
			.append('<div class="more-posts-placeholder-'+ pageNum +'"></div>')
			.append('<div class="link-more"><a href="#" id="load-more-posts">Carregar mais <i class="fa fa-plus-circle"></i></a></div>');
			
		// Remover a navegação tradicional, caso exista.
		$('.navigation').remove();
	}
	else{
		$('#moreposts')
			.append('<div class="link-more"><a href="#" id="load-more-posts">Aguarde novos conteúdos em breve!</a></div>');
	}
		
	/**
	 * Carregar mais postagens quando o botão for clicado.
	 */

	$('#load-more-posts').click(function() {
	
		// Há mais postagens para carregar?
		if(pageNum <= max) {
		
			// Mostrar que está carregando.
			$(this).text('Carregando...');
			
			$('.more-posts-placeholder-'+ pageNum).load(nextLink + ' .post',
				function() {
					// Atualizar o número da página e o próximo linkk.
					pageNum++;
					nextLink = nextLink.replace(/\/page\/[0-9]?/, '/page/'+ pageNum);
					
					// Adicionar o botão "carregar mais" novamente.
					$('.link-more')
						.before('<div class="more-posts-placeholder-'+ pageNum +'"></div>')
					
					// Atualizar o texto do botão.
					if(pageNum <= max) {
						$('#load-more-posts').html('Carregar mais <i class="fa fa-plus-circle"></i>');
					} else {
						$('#load-more-posts').html('Você chegou ao fim =)');
					}
				}
			);
		} else {
			$('#load-more-posts').html('Não tem mais nada por aqui...');
		}	
		
		return false;
	});
});