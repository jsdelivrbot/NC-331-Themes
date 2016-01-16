if (document.getElementById) { window.onload = swap };
function swap() {
var numimages=2;
rndimg = new Array("http://i.imgur.com/2pEEFLQ.gif", "https://alpha.nightcore-331.net/img/logo.png");
x=(Math.floor(Math.random()*numimages));
randomimage=(rndimg[x]);
document.getElementById("room-title").style.content = "url("+ randomimage +")";
$('head').append('<link rel="stylesheet" href="https://rawgit.com/Elitehunter47/theme/master/Monochrome/test.css" type="text/css" />');
}
