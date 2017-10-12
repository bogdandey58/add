document.querySelector('.top').onmousemove = function (event) {
	event = event || window.event;
	var y = event.offsetY;
	document.querySelector('.top').style.top = 290 + 'px';
	console.log(event);
}
document.querySelector('.top').onmouseleave = function (event) {
	event = event || window.event;
	var y = event.offsetY;
	document.querySelector('.top').style.top = 0 + 'px';
	console.log(event);
}

document.querySelector('.left').onmousemove = function (event) {
	event = event || window.event;
	var x = event.offsetX;
	document.querySelector('.left').style.right = 290 + 'px';
	console.log(event);
}
document.querySelector('.left').onmouseleave = function (event) {
	event = event || window.event;
	var x = event.offsetX;
	document.querySelector('.left').style.right = 0 + 'px';
	console.log(event);
}

document.querySelector('.right').onmousemove = function (event) {
	event = event || window.event;
	var x = event.offsetX;
	document.querySelector('.right').style.top = -290 + 'px';
	console.log(event);
}
document.querySelector('.top').onmouseleave = function (event) {
	event = event || window.event;
	var x = event.offsetX;
	document.querySelector('.top').style.top = 0 + 'px';
	console.log(event);
}

// document.querySelector('.top').onmousemove = function (event) {
// 	event = event || window.event;
// 	var y = event.offsetY;
// 	document.querySelector('.top').style.top = 290 + 'px';
// 	console.log(event);
// }
// document.querySelector('.top').onmouseleave = function (event) {
// 	event = event || window.event;
// 	var y = event.offsetY;
// 	document.querySelector('.top').style.top = 0 + 'px';
// 	console.log(event);
// }