var test;
var trees = ["tree9.gif", "tree11.png", "tree12.png"];
var stars = ["star.gif", "star2.gif", "star3.gif"];
var choices = new Array();

window.onload = function() {
	var width = window.innerWidth;
	var imgs = $$(".choice");
	
	for(var i = 0; i < imgs.length; i++) {
		imgs[i].style.width = Math.floor(width/4) + "px";
		imgs[i].observe("click", mouseclickImage);
		imgs[i].observe("mouseover", mouseoverImage);
		imgs[i].observe("mouseout", mouseoutImage);
	}
	
	$("loading").hide();
	$("imgs").show();
};

function setupImages(str) {
	var width = window.innerWidth;
	var imgs = $$(".choice");
	$("loading").show();
	$("imgs").hide();
	if(str == "stars") {
		$("type").innerHTML = "star";
		for(var i = 0; i < imgs.length; i++) {
			imgs[i].src = stars[i];
			imgs[i].style.width = Math.floor(width/8) + "px";
		}
	} else {
		$("type").innerHTML = "tree";
		for(var i = 0; i < imgs.length; i++) {
			imgs[i].src = trees[i];
			imgs[i].style.width = Math.floor(width/5) + "px";
		}
	}
	$("loading").hide();
	$("imgs").show();
}

function mouseoverImage(event) {
	test = event;
	event.target.style.borderColor = "red";
}

function mouseoutImage(event) {
	event.target.style.borderColor = "green";
}

function mouseclickImage(event) {
	var numChosen = choices.length;

	//add to choices
	var imgSrcArray = event.target.src.split("/");
	var imgSrc = imgSrcArray[imgSrcArray.length - 1];
	choices[numChosen] = imgSrc;
	
	if(numChosen == 0) {
		setupImages("stars");
	} else if (numChosen == 1) {
		setupImages("trees");
	} else {
		$("loading").show();
		instructions();
	}
}

function instructions() {
	$("subtitle").innerHTML = "How to use:";
	$("imgs").innerHTML = "";
	
	//instructions picture
	var width = window.innerWidth;
	var picture = document.createElement("img");
	picture.src = "instructions.JPG";
	picture.alt = "Instructions Picture";
	picture.style.width = Math.floor(width/3) + "px";
	$("imgs").appendChild(picture);
	
	$("loading").hide();
	$("instructions").show();
	$("clicktobegin").show();
	Effect.Pulsate($("clicktobegin"), { pulses: 30, duration: 60 });
	
	$("clicktobegin").observe("click", makeURLAndSend);
}

function makeURLAndSend() {
	var background = choices[0];
	var star = choices[1];
	var tree = choices[2];
	
	document.location.href = "http://students.washington.edu/kershm/christmas/christmas.php?bkgd=" + background  + "&tree=" + tree + "&star=" + star;
}
