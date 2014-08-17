//On doc ready

var duckType = {
	'info': 0,
	'error': 1,
	'success': 2,
	'dialog': 3,
};

function raiseDuckAlert(text, alertType, intrusive, doneFunc){
	if($('.duckAlertContainer') && $('.duckAlertContainer').length > 0){
		$('.duckAlertContainer').remove();
	}
	if(alertType == duckType.info){
		if(intrusive == true){
			$('body').append('<div class="duckBlock"><p></p></div> ');
			var blocker = $('.duckBlock');
			blocker.css("height", $(window).height);
		}
		$('body').append('<div class="duckAlertContainer" >\
			<div class="duckAlertStuff">\
				<p class="duckAlertText"></p>\
				<div class="duckButtons">\
					<button class="duckDoneSuccess">OK</button>\
				</div>\
			</div>\
		</div> ');
		var container = $('.duckAlertContainer');
		$('.duckAlertText').text(text);
		container.css("top", -(container.height()));
		container.animate({
		    top: "+="+container.height(),
		  }, "fast", function() {
		    // Animation complete.
		  });
		$('.duckDoneSuccess').click(function(){
			if(doneFunc && typeof doneFunc !== 'undefined' && typeof doneFunc === 'function'){
				doneFunc();
			}
			container.animate({
			    top: "-="+container.height(),
			  }, "fast", function() {
			  	container.remove();
			  	if(blocker && blocker.length > 0){
			  		blocker.remove();
			  	}	
			  });

		});
	}
}

(function() {
	if (window.jQuery) {  

	} else {
	    if(console && console.error){
	    	console.error("Unable to find jQuery, please make sure it is properly loaded.");
	    }
	}
})();