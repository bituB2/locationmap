
var x = document.getElementById("map");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}



function showPosition(position) {
  // Get latitude and longitude from the position object
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  
  // Construct the new URL with the latitude and longitude
  var mapUrl = "https://maps.google.com/maps?q=" + lat + "," + lng + "&z=15&output=embed";
  
  // Update the iframe src attribute with the new URL
  var mapIframe = document.getElementById("map-iframe");
  mapIframe.src = mapUrl;
  
  // Display the latitude and longitude on the page
  x.innerHTML = "Latitude: " + lat + "<br>Longitude: " + lng;
}
