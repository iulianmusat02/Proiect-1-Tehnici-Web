$(function() {

	// grab the initial top offset of the navigation 
	//var sticky_navigation_offset_top = $('.nav-main').offset().top+100;
	var sticky_navigation_offset_top = 70;
	
	// our function that decides weather the navigation bar should have "fixed" css position or not.
	var sticky_navigation = function(){
		var scroll_top = $(window).scrollTop(); // our current vertical position from the top
		
		
		// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
		if (scroll_top > sticky_navigation_offset_top) { 
			$('.nav-main').css({ 'background': '#000000', 'padding': '5px' });
			$('.logo').css({ 'opacity': '0' });
		} else {
			$('.nav-main').css({ 'background': 'transparent', 'padding': '25px 0px 25px 0px' });
			$('.logo').css({ 'opacity': '1' });
		}   
	};
	
	// run our function on load
	sticky_navigation();
	
	// and run it again every time you scroll
	$(window).scroll(function() {
		 sticky_navigation();
	});
	
	// NOT required:
	// for this demo disable all links that point to "#"
	$('a[href="#"]').click(function(event){ 
		event.preventDefault(); 
	});
	
});