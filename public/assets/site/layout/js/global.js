$('.product_clicker').click(function(ev){
	ev.preventDefault();
	$('.nav-men').fadeToggle('slow');
});
$('.inner-dropdown a').click(function(ev){
	ev.preventDefault();
	$('.inner-nav').fadeToggle('slow');
});

var counter = 0;
$('.nav-open').click(function(){
	if(counter == 0){
		$('body').css('overflow', 'hidden');
		counter++;
	}else{
		$('body').css('overflow-y', 'scroll');
		counter = 0;
	}
});