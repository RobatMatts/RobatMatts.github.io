//fix lazy-loaded image preloading in rpi carousel (owlCarousel)
if($(".slider-rpi")[0]){var owlrpi=$(".slider-rpi");owlrpi.on("loaded.owl.lazy",function(i){var r=i.item.index+1,d=$(".slider-rpi").find(".owl-item").eq(r).find("img"),e=$(i.target).find(".owl-item").eq(r).find("img").data("src");d.attr("src",e)})}
$(document).ready(function(){
	function ajaxGet(url, handler){
 		$.ajax({'url':url }).done(handler);
 	}
	var IS_IOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

 	function trackPhoneCalls(){
		var call_was_tracked = false;
 		function onClick(){
			if(!call_was_tracked ){
	 			ajaxGet('/accumulate-metric/mobile-call.html');
				call_was_tracked = true;
			}
 		}

 		$('.track-calls').each(function(index, element) {
			// Added because safari is a special flower and needs cursor pointer to count clicks
			if (IS_IOS) element.style.cursor = 'pointer';
 			element.addEventListener('click', onClick);
		});
		
		$('a[href^="tel:"]:not(.track-calls)').each(function(i, el) {
			if (store_phones.indexOf(el.href.replace(/\D+/gm, '')) > -1) {
				if (IS_IOS) el.style.cursor = 'pointer';
				el.addEventListener('click', onClick);
			}
		})
		// ********************************
		
 	}

 	function trackGetDirections(){
		var click_was_tracked = false;

 		function onClick(){
			if(!click_was_tracked ){
	 			ajaxGet('/accumulate-metric/mobile-directions.html');	
				click_was_tracked = true;
			}
 		}

 		$('.track-directions').each(function(index, element){
			if (IS_IOS) element.style.cursor = 'pointer';
 			element.addEventListener('click', onClick);
		});
		 
		// this is here to add the event listener to stores that have overridden the default direction links or added ones without the track-directions class
		$('a[href^="#get-directions"]:not(.track-directions)').each(function(i, el) {
			if (IS_IOS) el.style.cursor = 'pointer';
			el.addEventListener('click', onClick);
		})
 	}

 	trackPhoneCalls();
 	trackGetDirections();
});

