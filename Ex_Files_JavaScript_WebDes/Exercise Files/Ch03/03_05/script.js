
// Edit Date: 2017-09-20
// Editor : Chinatsu Kawakami
//version 0.0.3 add function to check submit event works or not

(function() {
"use strict";

document.getElementById('cart-hplus').addEventListener('submit',estimateTotal);

function estimateTotal(event){
	event.preventDefault();
    
    console.log('you submitted');
}


})();