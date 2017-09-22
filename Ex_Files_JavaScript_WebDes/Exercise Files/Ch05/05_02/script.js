/*
// Edit Date: 2017-09-22
// Editor : Chinatsu Kawakami
//version 0.1.9 Create the Map
*/

var gMapAPIKey = 'AIzaSyCUUxT3VGPt3WLwMEorVjpRBg3kED3w5f0';

 var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('hplus-map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
