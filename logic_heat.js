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

// Reading Data
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
  
