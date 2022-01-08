function arrange() {
    var LINKS = document.getElementById('links').value;
    if(LINKS=="") {
        LINKS = '{"Info":"' + document.getElementById('info').value +
             '","Player":"' + document.getElementById('player').value +
             '","WN":"' + document.getElementById('watch').value +
             '","DL":"' + document.getElementById('download').value +
             '"}';
    } 
    else {
        LINKS = LINKS + ',' +
        '{"Info":"' + document.getElementById('info').value +
             '","Player":"' + document.getElementById('player').value +
             '","WN":"' + document.getElementById('watch').value +
             '","DL":"' + document.getElementById('download').value +
             '"}';
    }
    document.getElementById('links').value = LINKS;
}
function linkjson() {
    var JSON = document.getElementById('json').value;
    JSON = '[' + document.getElementById('links').value + ']';
    document.getElementById('json').value = JSON;
}
function ssmap() {
    var SS = document.getElementById('map').value;
    SS = '{"SS1":"' + document.getElementById('ss1').value +
         '","SS2":"' + document.getElementById('ss2').value +
         '","SS3":"' + document.getElementById('ss3').value +
         '","SS4":"' + document.getElementById('ss4').value +
         '","SS5":"' + document.getElementById('ss5').value +
         '"}';
    document.getElementById('map').value = SS;
}