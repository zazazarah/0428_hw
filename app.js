$(document).ready(function() {


// change color of div on click of red box button
	$(document).on("click", "#change-red", function() {
		$("#red-box")
		.css("background-color", "#d9534f");
	});
// change color of div on click of green box button
	$(document).on("click", "#change-green", function() {
		$("#green-box")
		.css("background-color", "#5cb85c");
	});
// change color of div on click of blue box button
	$(document).on("click", "#change-blue", function() {
		$("#blue-box")
		.css("background-color", "#337ab7");
	});
// make box bigger 
$(document).on("click", "#make-big", function() {
		$("#add-big-red").toggleClass("big-red");
	});
// make box smaller
$(document).on("click", "#make-small", function() {
		$("#add-small-green").toggleClass("small-green");
	});
// animate box
$(document).on("click", "#animate-div", function() {
		$("#add-animation").addClass("animate-box");
	});

//does not work yet

$(document).on("click", "#create-overlay", function() {
		$("#add-overlay").addClass("overlay-box");
	});



});