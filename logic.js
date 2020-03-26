// Create a map object
var myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 3
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Departments data
var departments = [
  {
    name: "Antioquia",
    location: [7.1986, -75.3412],
    NumeroCasos: 59
  },
  {
    name: "Atlántico",
    location: [10.6966, -74.8741],
    NumeroCasos: 1
  },
  {
    name: "Barranquilla",
    location: [11.0041, -74.807
    ],
    NumeroCasos: 11
  },
  {
    name: "Bogotá",
    location: [4.711, -74.0721],
    NumeroCasos: 169
  },
  {
    name: "Boyacá",
    location: [5.4545, -73.362],
    NumeroCasos: 1
  },
  {
    name: "Caldas",
    location: [5.2983, -75.2479],
    NumeroCasos: 10
  },
  {
    name: "Cartagena",
    location: [10.3932, -75.4832],
    NumeroCasos: 26
  },
  {
    name: "Casanare",
    location: [5.7589, -71.5724],
    NumeroCasos: 1
  },
  {
    name: "Cauca",
    location: [2.705, -76.826],
    NumeroCasos: 9
  },
  {
    name: "Cesar",
    location: [9.3373, -73.6536],
    NumeroCasos: 2
  },
  {
    name: "Cundinamarca",
    location: [5.026, -74.03],
    NumeroCasos: 22
  },
  {
    name: "Huila",
    location: [2.5359, -75.5277],
    NumeroCasos: 14
  },
  {
    name: "Meta",
    location: [3.272, -73.0877],
    NumeroCasos: 8
  },
  {
    name: "Nariño",
    location: [1.2892, -77.3579],
    NumeroCasos: 1
  },
  {
    name: "Norte de Santander",
    location: [7.9463, -72.8889],
    NumeroCasos: 15
  },
  {
    name: "Quindío",
    location: [4.461, -75.6674],
    NumeroCasos: 12
  },
  {
    name: "Risaralda",
    location: [5.3158, -75.9928],
    NumeroCasos: 19
  },
  {
    name: "San Andrés Islas",
    location: [12.545, -81.7076],
    NumeroCasos: 1
  },
  {
    name: "Santa Marta",
    location: [11.2404, -74.211],
    NumeroCasos: 5
  },
  {
    name: "Santander",
    location: [6.6437, -73.6536],
    NumeroCasos: 4
  },
  {
    name: "Tolima",
    location: [4.0925, -75.1545],
    NumeroCasos: 9
  },
  {
    name: "Valle",
    location: [3.8009, -76.6413],
    NumeroCasos: 71
  }
];


// Loop through the departments array and create one marker for each department object
for (var i = 0; i < departments.length; i++) {

  // Conditionals for departments Number of cases
  var color = "";
  if (departments[i].NumeroCasos < 10) {
    color = "#ffcc00";
  }
  else if (departments[i].NumeroCasos < 100) {
    color = "#ff9933";
  }
  else if (departments[i].NumeroCasos < 500 ) {
    color = "#ff6600";
  }
  else {
    color = "#ff0000";
  }

  // Add circles to map
  L.circle(departments[i].location, {
    fillOpacity: 0.75,
    color: "black",
    fillColor: color,
    // Adjust radius
    radius: departments[i].NumeroCasos * 1000
  }).bindPopup("<h1>Departamento: " + departments[i].name + "</h1> <hr> <h3>Numero de Casos: " + departments[i].NumeroCasos + "</h3>").addTo(myMap);
}


// Color Legend
function legendColor(cases) {
  if (cases < 10) {
      return "#ffcc00"
  }
  else if (cases < 100) {
      return "#ff9933"
  }
  else if (cases < 500) {
      return "#ff6600"
  }
  else {
      return "#ff0000"
  }
}

// Legend
var legend = L.control({ position: 'bottomright' });

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        scale = [0,10,100,500],
        labels = [];
    div.innerHTML += "<strong><p>Numero de Casos</p>"
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < scale.length; i++) {
        div.innerHTML +=
            '<i style="background:' + legendColor(scale[i]) + '"></i> ' +
            scale[i] + (scale[i + 1] ? '&ndash;' + scale[i + 1] + '<br>' : '+');
    }
    return div;
};

legend.addTo(myMap);

