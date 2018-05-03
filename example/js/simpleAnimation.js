/*
* simpleAnimation | v1.0.0
* by Marko Arula.
*/

var animateHTML = function () {
	var elements,
    	windowHeight;
  	var init = function () {
    	elements = document.getElementsByClassName('simple-animation');
    	windowHeight = window.innerHeight;
    	addEventHandlers();
  	}
  	var addEventHandlers = function () {
    	window.addEventListener('scroll', checkPosition);
    	window.addEventListener('load', checkPosition);
  	}
    var setDelay = function (item,duration,delay) {
        setTimeout(function(){
            item.style['-webkit-animation-duration'] = duration+'ms';
            item.style['animation-duration'] = duration+'ms';
            item.className = item.className.replace('simple-animation', 'animation-completed');
        }, delay);
    }
  	var checkPosition = function () {
    	for (var i = 0; i < elements.length; i++) {
    		var item = elements[i];
			var duration = item.getAttribute('data-duration');
			var delay = item.getAttribute('data-delay');
      		var posFromTop = item.getBoundingClientRect().top;
      		if (posFromTop - windowHeight <= 0) {
                console.log(delay);
      			if(delay > 0){
                    setDelay(item,duration,delay);
				} else{
					item.style['-webkit-animation-duration'] = duration+'ms';
					item.style['animation-duration'] = duration+'ms';
    				item.className = item.className.replace('simple-animation', 'animation-completed');
				}
      		}
    	}
  	}
  	return {
      init : init
  	}
}
animateHTML().init();