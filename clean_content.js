$("body").prepend("<div>Source : <a href=\""+window.location.href+"\">"+window.location.href+"</a></div>");

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
	removeRtbf();
}
else
if (window.location.origin.includes("lesoir"))
{
	removeLeSoir();
}
else	
if (window.location.origin.includes("rtl"))
{
	removeRtl();
}
else
	alert("Unknonwn site url");
		
/**
*
* Functions
*
*/

function removeRtl() {

}


function removeLeSoir() {
	// TODO : In progress 
	$( "#gr-header" ).remove();
	$( "#gr-sidebar" ).remove();
	$( ".pane-voir-aussi" ).remove();
	
	$( ".gr-pane" ).remove();
	$( ".pane-eng-ls-plan-du-site" ).remove();
	$( "#comments" ).remove();
	$( ".gr-social-links" ).remove();
	$( ".gr-social" ).remove();
	$( ".gr-linked-stories" ).remove();
	$( ".gr-free-tags" ).remove();
	$( ".pane-ena-breadcrumb" ).remove();
	
	
	$( ".OUTBRAIN" ).remove();
	$( ".pane-block-marketing-sites-newslett" ).remove();
	$( "#rossel-leader-top" ).remove();
	
	
	
	$( "#gr-article" ).css("width", "100%");
	
	$( "#gr-sidebar-left" ).remove();
	$( ".gr-article-sidebar" ).remove();
	
}



function removeRtbf() {
	
	// Keep logo and comment .topbar
	//$( ".rtbf-nav" ).remove();
	//$( ".rtbf-nav-plus" ).remove();
	
	$( ".topbar" ).remove();
	$( ".banner" ).remove();
	$( ".rtbf-nav-full" ).remove();
	$( ".rtbf-site-nav" ).remove();
	$( ".www-sidebar" ).remove();
	$( "#top" ).remove();
	$( ".col-md-8" ).removeClass('col-md-8').addClass('col-md-12');
	$( "#readspeaker_button1" ).remove();
	$( ".article-social" ).remove();
	$( ".rtbf-article-main__related" ).remove();
	$( ".rtbf-newsletter-article" ).remove();
	
	$( ".footer-main" ).remove();
	// Rtbf sport
	$( ".rtbf-direct-line" ).remove();

}

function removeLameuse() {
	$( "#gr-sidebar-left" ).remove();
	$( ".gr-carousel-breaking" ).remove();
}

/**
Version avant 12-12-2019
*/
/*
function removeSufIndo() {
	$( "#gr-header" ).remove();
	$( "#gr-sidebar" ).remove();
	$( ".gr-article-infos" ).remove();
	$( "#gr-footer" ).remove();	
	$('.panel-pane').nextAll().remove();	
	$("#gr-article").css("padding-left", "10px");
	$("#gr-article").css("width", "100%");
}
*/

function removeSufIndo() {
	$( "#gr-header" ).remove();
	$( ".OUTBRAIN " ).remove();
	$( "#gr-sidebar" ).remove();
	$( ".thRecommendations" ).remove();
	$( "#slg-digiteka" ).remove();
	$( "#gr-footer" ).remove();	
	$( "#commentaires").remove();
	
	/*
	$( ".gr-article-infos" ).remove();
	$( "#gr-footer" ).remove();	
	$('.panel-pane').nextAll().remove();	
	$("#gr-article").css("padding-left", "10px");
	$("#gr-article").css("width", "100%");
	
	*/
}

/* 
Version avant 12-12-2019
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
*/

function removeDhNet() {
	// Dh.Net
	$( ".documentHeader" ).remove();
	$( ".documentFooter" ).remove();
	$( "#articleIlluFullWidth").remove();
	
	$( ".addthis_sharing_toolbox").remove();
	$( ".shareToolsBar").remove();
	$( ".article-shareBox").remove();
	$( ".comments").remove();
	
	$("#block1").remove();
	$("#block2").remove();
	$("#block3").remove();
	$("#block4").remove();
	$("#block5").remove();
	$("#block6").remove();
	$("#block7").remove();
	$("#block8").remove();
	$(".article-linksList").remove();



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