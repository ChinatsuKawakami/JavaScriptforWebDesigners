/*
// Edit Date: 2017-09-22
// Editor : Chinatsu Kawakami
//version 0.2.0 Change the center point.

*/

var gMapAPIKey = 'AIzaSyAvIWyZ3JXDqozzp8aZOLwcfR0brTSIWkI';

var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('hplus-map'), {
		center: {lat: 34.1031252, lng: -118.3263873},
		zoom: 8
	});
}