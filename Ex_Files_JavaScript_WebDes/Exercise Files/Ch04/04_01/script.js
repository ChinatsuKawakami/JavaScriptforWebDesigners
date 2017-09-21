// Edit Date: 2017-09-21
// Editor : Chinatsu Kawakami
//version 0.1.3 add the function to show the current time.

(function(){
'use strict';

document.addEventListener('DOMContentLoaded',function(){

var c = document.getElementById('current-time');
var d = new Date();

c.innerHTML = d.toTimeString();

});


})();