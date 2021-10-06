let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

map.addListener("bounds_changed", () => {
    var center = this.getCenter();
    var latitude = center.lat();
    var longitude = center.lng();
    console.log("lat = " +latitude);
    console.log("long = " +longitude);
  });