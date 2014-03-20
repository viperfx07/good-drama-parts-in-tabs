$('.vmargin').remove();
$.get(document.URL,function(data){
	$('#streams').html($('.vmargin',data).html());
})