// document.body.style.color = "blue"

if (window.location.origin.includes("dhnet"))
{
	
	// Dh.Net
	$( ".documentHeader" ).remove();
	$( ".documentFooter" ).remove();

	// une pub
	$( "#block0" ).remove();
	$( "#THINARTICLE_CENTER" ).remove();
	// Supprime la collonne de droite.
	$( ".col-md-4" ).remove();
	// Agrandit l'article en 12 collones
	$( ".col-md-8" ).removeClass('col-md-8').addClass('col-md-12');
	
	$('.article-productionData-author--small').nextAll().remove();
	$('.article-highlightedLinksBox').remove();
	$('body').get(0).style.setProperty( 'padding-top', '0', 'important' );
}
else
{
	
	$( ".site-header" ).remove();
	$( ".article__share" ).remove();
	
	$('.article__body').nextAll().remove();
	$('.article-detail__article-main').nextAll().remove();
	$('.article__body').parent().nextAll().remove();
	

	$( ".article-widgets" ).remove();
	
	$('.site-footer').parent().remove();
	
	$('#photoads').remove();
	
	
	
	
}
