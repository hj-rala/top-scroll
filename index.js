//자동
$('html, body').animate({ scrollTop: $('.parkF1').offset().top - 100}, 800, 'easeInOutExpo' );




//페이지 이동시 스크롤
var getParameters = function (paramName) {
	var returnValue;
	var url = location.href;
	var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');
			for (var i = 0; i < parameters.length; i++) {
			var varName = parameters[i].split('=')[0];

			if (varName.toUpperCase() == paramName.toUpperCase()) {
				returnValue = parameters[i].split('=')[1];
				return decodeURIComponent(returnValue);
			}
		}
	};

	if (getParameters('slide') == 'yes'){
		var winW = $(window).width();
		var ypos = 0;
		if (winW > 540){ ypos = 100} else {ypos = 80;}
		$('html, body').animate({ scrollTop: $('.tabOne').offset().top-ypos}, 800, 'easeInOutExpo' );
	}
