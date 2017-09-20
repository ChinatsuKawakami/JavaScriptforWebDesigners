// Edit Date: 2017-09-20
// Editor : Chinatsu Kawakami
//version 0.0.7 add the function to show total cost

(function() {
"use strict";

var state = document.getElementById('s-state');

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('cart-hplus').addEventListener('submit', estimateTotal);
	
	var btnEstimate = document.getElementById('btn-estimate');
	
	btnEstimate.disabled = true;
	
	state.addEventListener('change', function() {
	
		if (state.value === '') {
			btnEstimate.disabled = true;
		} else {
			btnEstimate.disabled = false;
		}
	
	});
});

function estimateTotal(event) {
	event.preventDefault();
	
	if (state.value === '') {
		alert('Please choose your shipping state.');
		
		state.focus();
	}
	
	var itemBball = document.getElementById('txt-q-bball').value,
		itemJersey = document.getElementById('txt-q-jersey').value,
		itemPower = document.getElementById('txt-q-power').value,
		shippingState = state.value,
		shippingMethod = document.querySelector('[name=r_method]:checked').value;
		
	//console.log(itemBball, itemJersey, itemPower, shippingState, shippingMethod);

	var totalQty = itemPower+itemBball+itemJersey,
	    shippingCostper,
	    shippingCost,
	    taxFactor=1,
	    estimate,
	    totalItemprice = (90 * itemBball) + (25 * itemJersey)+(30 * itemPower);
	    
        
        if(shippingState==='CA'){
        	taxFactor = 1.075;
        }

        switch(shippingMethod){
        	case 'usps':
        	  shippingCostper = 2;
        	  break;
        	case 'ups':
        	  shippingCostper = 3;
        	  break;
        	default:
        	  shippingCostper = 0;
        	  break;

        }

        shippingCost = shippingCostper * totalQty;

	  
       /* if(shippingState==='pickup'){
        	shippingCostper = 0;
        }else if(shippingMethod==='usps'){
            shippingCostper = 2;
        }*/
	    estimate = (totalItemprice * taxFactor) + shippingCost;

	    document.getElementById('txt-estimate').value = estimate;
}

})();