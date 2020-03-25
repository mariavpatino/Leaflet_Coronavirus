// Define a map object
var map = L.map("map", {
    // COL coordinates
    center: [4.5709, -74.29],
    zoom: 5
  });

// Base layers 
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(map);

  
d3.json("March252020.json", function (response) {
    
    console.log(response);

    var heatArray = [];
  
    for (var i = 0; i < response.length; i++) {
      var location = response[i];
  
      if (location) {
        heatArray.push([parseFloat(location.Lat), parseFloat(location.Lon)]);
      }
    }
    
  console.log(heatArray);

    var heat = L.heatLayer(heatArray, {
      radius: 30,
      blur: 1
    }).addTo(map);
  
});
  
 
// var legend = L.control({ position: 'bottomright' });

// legend.onAdd = function (map) {

//     var div = L.DomUtil.create('div', 'info legend'),
//         richterScale = [0,10,100,500],
//         labels = [];
//     div.innerHTML += "<strong><p>Richter<br> Scale</p>"
//     // loop through our density intervals and generate a label with a colored square for each interval
//     for (var i = 0; i < richterScale.length; i++) {
//         div.innerHTML +=
//             '<i style="background:' + legendColor(richterScale[i]) + '"></i> ' +
//             richterScale[i] + (richterScale[i + 1] ? '&ndash;' + richterScale[i + 1] + '<br>' : '+');
//     }
//     return div;
// };

// legend.addTo(map);

