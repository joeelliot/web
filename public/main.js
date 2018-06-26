// $('#btn1').on('click', function() {
// 	$('p').css('opacity', 0);
// });

var btn1 = document.getElementById("btn1");
var p1 = document.getElementById("p1");

function click() {
	console.log("Work");
	p1.style.color = "blue";
}

btn1.addEventListener('click', function() {
	click()
}, false)