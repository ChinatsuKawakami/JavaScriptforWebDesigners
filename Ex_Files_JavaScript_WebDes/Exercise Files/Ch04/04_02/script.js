// Edit Date: 2017-09-21
// Editor : Chinatsu Kawakami
//version 0.1.4 add the function to show the current time only has hours and minutes.

(function(){
'use strict';

document.addEventListener('DOMContentLoaded', function(){
	var c = document.getElementById('current-time');
	
	var d = new Date();
	var hours = d.getHours();
	if(hours>12) {
		hours -=12;
	}
	
	c.innerHTML = hours + ':' + d.getMinutes();
});

})();