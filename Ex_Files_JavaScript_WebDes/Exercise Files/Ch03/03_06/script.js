
// Edit Date: 2017-09-20
// Editor : Chinatsu Kawakami
//version 0.0.4 add function to show alert when the user forget to select status of shopping
(function() {
"use strict";

document.getElementById('cart-hplus').addEventListener('submit', estimateTotal);

function estimateTotal(event) {
	event.preventDefault();

	var state = document.getElementById('s-state');
	
	if(state.value === ''){
        alert('please choose your shopping status.');
        state.focus();
	}

	//console.log('You submitted the form.');
}

})();