 $(function(){
 	$('.nd-khoi').slideUp();
 	//click vào thẻ
 	$('.mot-khoi').click(function(event) {
 		/* Act on the event */
 		console.log('da click');
 		$('.nd-khoi').slideToggle();
 		$('.mot-khoi').addClass('trang')
 	});
})  
