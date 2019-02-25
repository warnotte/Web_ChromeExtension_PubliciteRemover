// document.body.style.color = "blue"

if (window.location.origin.includes("dhnet"))
{
	removeDhNet();
}
else
if (window.location.origin.includes("lavenir"))
{
	removeLavenir();
}
else
if (window.location.origin.includes("lalibre"))
{
	// Meme chose que DHnet a priori.
	removeDhNet();
}
else
if (window.location.origin.includes("sudinfo"))
{
	removeSufIndo();
}
else
if (window.location.origin.includes("lameuse"))
{
	// Drole de mix ;) mais ça marche jusque la.
	removeSufIndo();
	removeLameuse();
}
else
if (window.location.origin.includes("rtbf"))
{
	// Drole de mix ;) mais ça marche jusque la.
	removeRtbf();
	
}
else
	alert("Unknonwn site url");
	
	
	
/**
*
* Functions
*
*/
	

function removeRtbf() {

	$( ".banner" ).remove();
	$( ".topbar" ).remove();
	$( ".rtbf-nav-full" ).remove();
	$( ".rtbf-site-nav" ).remove();
	$( ".www-sidebar" ).remove();
	
	$( ".col-md-8" ).removeClass('col-md-8').addClass('col-md-12');
	
	
	$( "#readspeaker_button1" ).remove();

	$( ".article-social" ).remove();
	
	$( ".rtbf-article-main__related" ).remove();
	$( ".footer-main" ).remove();
	
	
	
	
}

function removeLameuse() {
	$( "#gr-sidebar-left" ).remove();
	$( ".gr-carousel-breaking" ).remove();
}

function removeSufIndo() {
	$( "#gr-header" ).remove();
	$( "#gr-sidebar" ).remove();
	$( ".gr-article-infos" ).remove();
	$( "#gr-footer" ).remove();	
	$('.panel-pane').nextAll().remove();	
	$("#gr-article").css("padding-left", "10px");
	$("#gr-article").css("width", "100%");
}

function removeDhNet() {
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

function removeLavenir() {
	$( ".site-header" ).remove();
	$( ".article__share" ).remove();
	$('.article__body').nextAll().remove();
	$('.article-detail__article-main').nextAll().remove();
	$('.article__body').parent().nextAll().remove();
	$( ".article-widgets" ).remove();
	$('.site-footer').parent().remove();
	$('#photoads').remove();	
}