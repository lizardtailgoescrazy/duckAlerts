//On doc ready

var duckType = ['info','error','success','dialog'];

function makeTheBox(text, alertType, intrusive){
	if($('.duckAlertContainer') && $('.duckAlertContainer').length > 0){
		$('.duckAlertContainer').remove();
	}

	if(intrusive == true){
		$('body').append('<div class="duckBlock"><p></p></div> ');
		var blocker = $('.duckBlock');
		blocker.css("height", $(window).height);
	}
	$('body').append('<div class="duckAlertContainer" >\
		<div class="duckAlertStuff">\
			<p class="duckAlertText"></p>\
			<div class="duckButtons">\
			</div>\
		</div>\
	</div> ');

	$('.duckAlertStuff .duckAlertText').text(text);

	var container = $('.duckAlertContainer');
	var style = "";

	if(duckType.indexOf(alertType) == -1){
		style = "duck-style-class-info";
		if(console && console.error){
			console.error("DUCK ALERTS: Alert type not recognised, defaults to info.");
		}
	}
	else{
		style = "duck-style-class-"+alertType;
	}

	container.addClass(style);

		container.css("top", -(container.height()));
		container.animate({
		    top: "+="+(container.height()-2),
		  }, "fast", function() {
		    // Animation complete.
		  });
}

function makeTheButtons(isDialog, doneFunc, notDoneFunc){
	if(!isDialog){
		var buttonsArea = $('.duckAlertStuff .duckButtons');
		buttonsArea.append('<button class="duckDoneSuccess duck-btn">OK</button>');
		buttonsArea.find('.duckDoneSuccess').click(function(){
			$(this).unbind();
			if(doneFunc && typeof doneFunc !== 'undefined' && typeof doneFunc === 'function'){
				doneFunc();
			}
			var container = $('.duckAlertContainer');
			container.animate({
			    top: "-="+container.height(),
			  }, "fast", function() {
			  	container.remove();
			  	var blocker = $('.duckBlock');
			  	if(blocker && blocker.length > 0){
			  		blocker.remove();
			  	}	
			  });

		});
	}
	else{
		var buttonsArea = $('.duckAlertStuff .duckButtons');
		buttonsArea.append('<button class="duckDoneSuccess duck-btn">Yes</button>\
			<button class="duckDoneCancel duck-btn">No</button>');
		buttonsArea.find('.duckDoneSuccess').click(function(){
			if(doneFunc && typeof doneFunc !== 'undefined' && typeof doneFunc === 'function'){
				doneFunc();
			}
			$(this).unbind();
			var container = $('.duckAlertContainer');
			container.animate({
			    top: "-="+container.height(),
			  }, "fast", function() {
			  	container.remove();
			  	var blocker = $('.duckBlock');
			  	if(blocker && blocker.length > 0){
			  		blocker.remove();
			  	}	
			  });

		});

		buttonsArea.find('.duckDoneCancel').click(function(){
			if(notDoneFunc && typeof notDoneFunc !== 'undefined' && typeof notDoneFunc === 'function'){
				notDoneFunc();
			}
			$(this).unbind();
			var container = $('.duckAlertContainer');
			container.animate({
			    top: "-="+container.height(),
			  }, "fast", function() {
			  	container.remove();
			  	var blocker = $('.duckBlock');
			  	if(blocker && blocker.length > 0){
			  		blocker.remove();
			  	}	
			  });

		});
	}
}

function raiseDuckAlert(text, alertType, intrusive, doneFunc){
	makeTheBox(text, alertType, intrusive);
	makeTheButtons(false, doneFunc);
}

function raiseDuckDialog(text, alertType, intrusive, doneFunc, notDoneFunc){
	makeTheBox(text, alertType, intrusive);
	makeTheButtons(true, doneFunc, notDoneFunc);
}

(function() {
	if (window.jQuery) {  

	} else {
	    if(console && console.error){
	    	console.error("DUCK ALERTS: Unable to find jQuery, please make sure it is properly loaded.");
	    }
	}
})();