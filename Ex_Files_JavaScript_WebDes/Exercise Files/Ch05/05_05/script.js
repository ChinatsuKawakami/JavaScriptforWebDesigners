/*
// Edit Date: 2017-09-22
// Editor : Chinatsu Kawakami
//version 0.2.2 Add a marker.
*/
var gMapAPIKey = 'AIzaSyDC_wGSSyUGw3KPps1f5pceJwr8TC6HWzg';
var map;
function initMap() {
	var storeLocation = {lat: 34.1031131, lng: -118.326343};
	map = new google.maps.Map(document.getElementById('hplus-map'), {
		'center' : storeLocation,
		'zoom' : 12,
		'mapTypeId' : google.maps.MapTypeId.ROADMAP,
		'draggable' : false,
		'scrollwheel' : false
	});

	  var marker = new google.maps.Marker({
          'position': storeLocation,
          'map': map,
          'title': 'hplus sport in Los Angeles'
        });
}