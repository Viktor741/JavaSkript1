let a = `Ahoj světe`;
document.getElementById("app").innerHTML = `Kebab ` + a + `<br/><br/>`;
a = `pizza`;
document.getElementById("app").innerHTML =
  document.getElementById("app").innerHTML + "Další text " + a;

var x = 2;
var y = 7;
let z = y - x;
document.getElementById("vysledek").innerHTML = "cislo " + (x + y) * z;
/*var year = prompt("V kterem roce ses narodil ?");
if (year < 1989) alert("bylo ti třicet");
else alert("bude ti třicet");
// alert('Kebab')*/
/*var osmnact = confirm('Bylo Vám už 18?');
alert(osmnact);*/
var cislo = 18;
var osmnact;
if (cislo < 18) osmnact = false;
else osmnact = true;
document.getElementById("cislo").innerHTML = osmnact;

//alternativa

osmnact = cislo < 18 ? false : true;
document.getElementById("cislo").innerHTML = document.getElementById(
  "cislo"
).inne;
/*
var promenna = prompt("Zadej číslo!");
alert(+promenna + 100);
*/
function OdectiTri(x) {
  return +x - 3;
}
alert(OdectiTri(5));
for (var i = 0; i < 5; i++) {
  alert(OdectiTri(i));
}
