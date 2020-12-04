var miami = L.map('miami').setView([25.786504, -80.189132], 11.14);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoibmljb2xlbG9wZXp6MTAiLCJhIjoiY2tpOThreWY0MGFzMDJxbzlhaGllNTVydyJ9.YL00YKVR6yRuiW1nsKbeDA'
}).addTo(miami);


let ghee = L.marker([25.687150, -80.312850]).addTo(miami);
let flemings = L.marker([25.748210, -80.258170]).addTo(miami);
let pubbelly = L.marker([25.769050, -80.193290]).addTo(miami);
let ragazzi = L.marker([25.885390, -80.123790]).addTo(miami);

ghee.bindPopup("<b>Ghee Indian Kitchen</b><br>Great curry and a stylish interior.");

flemings.bindPopup("<b>Fleming's Prime Steakhouse and Winebar</b><br>This restaurant is my family's go-to. They have something that everyone will like and its nice to walk around Miracle Mile afterwards.");

pubbelly.bindPopup("<b>Pubbelly Sushi</b><br>This is my favorite sushi restaurant with unique rolls and desserts. My favorite dessert is the Black Sesame Ice Cream");

ragazzi.bindPopup("<b>Cafe Ragazzi</b><br>Located just a block form the beach, this is a great non-touristy restaurant that is beloved by locals. Everytime I visit my grandmother at her apartment in Miami Beach, we eat here.");
