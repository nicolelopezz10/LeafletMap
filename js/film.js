var films = L.map('films').setView([40.565885, -96.107317], 3.70);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoibmljb2xlbG9wZXp6MTAiLCJhIjoiY2tpOThreWY0MGFzMDJxbzlhaGllNTVydyJ9.YL00YKVR6yRuiW1nsKbeDA'
}).addTo(films);


for (let i = 0; i < places.length; i++ ){
  L.marker([places[i].latitude, places[i].longitude ])
  .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].descrip + '</p>' )
  .addTo( films );
}
