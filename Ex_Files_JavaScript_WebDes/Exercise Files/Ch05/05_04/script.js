/*
// Edit Date: 2017-09-22
// Editor : Chinatsu Kawakami
//version 0.2.1 Change the type and zoom level.
*/

var gMapAPIKey = 'AIzaSyDC_wGSSyUGw3KPps1f5pceJwr8TC6HWzg';

var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('hplus-map'), {
		'center': {lat: 34.1031131, lng: -118.326343},
		'zoom': 8,
		'mapTypeId': google.maps.MapTypeId.ROADMAP,
		'draggable':false,
		'scrollwheel':false
	});
}