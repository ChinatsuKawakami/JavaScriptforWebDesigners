
// Edit Date: 2017-09-20
// Editor : Chinatsu Kawakami
//version 0.0.5 add function to make the submit button disable.

(function() {
"use strict";
	var state = document.getElementById('s-state');

 document.addEventListener('DOMContentLoaded', function(){
	document.getElementById('cart-hplus').addEventListener('submit', estimateTotal);
     

	var btnEstimate = document.getElementById('btn-estimate');
 
    btnEstimate.disabled = true;

  state.addEventListener('change',function(){
     	if(state.value === ''){
       btnEstimate.disabled = true;
	}else{
		 btnEstimate.disabled = false;
	}


     });
	
});

document.getElementById('cart-hplus').addEventListener('submit', estimateTotal);

function estimateTotal(event) {
	event.preventDefault();
	
	
	if (state.value === '') {
		alert('Please choose your shipping state.');
		
		state.focus();
	}
}

})();