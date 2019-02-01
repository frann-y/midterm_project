//this creates the map

function initMap() {
  var map = new google.maps.Map

  
  // $('.map')
  (document.getElementById('map'), {
    zoom: 4,
    center: {lat: -25.363882, lng: 131.044922 }
  });

  map.addListener('click', function(e) {
    placeMarkerAndPanTo(e.latLng, map);
  });
}

function placeMarkerAndPanTo(latLng, map) {
  var marker = new google.maps.Marker({
    position: latLng,
    map: map
  });
  map.panTo(latLng);
}


// for (var i = 0; i < marker.length; i++){
//   addMarker(merkers[i]);
// }

// function addMarker (props {
//   var marker = new google.maps.Marker({
//     position: props.coords,
//     map:map,
//   })

// })