var test;

window.onload = function() {
	setBackgroundDimensions()
	setOrnamentSize();
	var ornaments = $$(".ornament");
	for(var i = 0; i < ornaments.length; i++) {
		new Draggable(ornaments[i], {revert: 'failure', onEnd: dragEnd});
	}
	Droppables.add("tree", {onDrop: thingDrop});
	$("ornamentcolors").observe("change", colorChangeOrn);
	$("lightcolors").observe("change", colorChangeLights);
	$("clear").observe("click", clearTree);
	$("startover").observe("click", startOver);
	
};

function setBackgroundDimensions() {
	
	var height = window.innerHeight;
	var width = window.innerWidth;
	
	//backgroundcolor
	var jpg = $("bkgdcolor").innerHTML;
	if(jpg == "background1.JPG") {
		document.body.style.backgroundColor = "darkblue";
	} else if (jpg == "background2.JPG") {
		document.body.style.backgroundColor = "black";
	} else {
		document.body.style.backgroundColor = "blue";
	}
	
	//snow
	var snowHeight = Math.floor(height / 6);
	$("snowimg").style.width = width + "px";
	$("snowimg").style.height = snowHeight + "px";
	$("snow").style.top = (height - snowHeight) + "px";
	
	//tree
	var treeHeight = Math.floor(height * (.9));
	$("treeimg").style.height = treeHeight + "px";
	$("treeimg").height = treeHeight;
	$("tree").style.left = Math.floor(width/2) + "px";
	$("tree").style.top = (height - treeHeight) + "px";
	
	//snowman
	var snowmanHeight = Math.floor(treeHeight/2);
	$("snowmanimg").style.height = snowmanHeight + "px";
	$("snowman").style.top = (height - snowmanHeight - Math.floor(height / 7)) + "px";
	
}

/*function $(str) {
	return document.getElementById(str);
}

function $$(str) {
	return document.querySelectorAll(str);
}*/

function setOrnamentSize() {
	
	//star
	$("starimg").style.height = Math.floor(parseInt($("treeimg").style.height)/5) + "px";
	
	//ornament/light sizing
	$$(".ornamentimg")[0].style.height = Math.floor(parseInt($("treeimg").style.height)/20) + "px";
	
	$$(".lightimg")[0].style.height = "15px";
	$$(".lightflashimg")[0].style.height = "15px";
	
	
	revealThings();
	
	//ornament/light cloning
	cloneOrnament("ornament");
	setInterval(blink, 600);
	
	cloneOrnament("light");
	cloneOrnament("lightflash");
}

function revealThings() {
	$("loading").hide();
	$("hide").show();
}

function blink() {
	var flashimgs = $$(".lightflashimg");
	for(var i = 0; i < flashimgs.length; i++) {
		Effect.Pulsate(flashimgs[i], { pulses: Math.floor((Math.random()*3)+1), duration: .6 });
	}
}

function colorChangeOrn() {
	var color = $("ornamentcolors").value;
	
	var ornaments = $$(".ornamentimg");
	for(var i = 0; i < ornaments.length; i++) {
		ornaments[i].src = color + ".png";
	}
}

function colorChangeLights() {
	var color = $("lightcolors").value;
	
	var ornaments = $$(".lightimg");
	for(var i = 0; i < ornaments.length; i++) {
		ornaments[i].src = color + ".png";
	}
	ornaments = $$(".lightflashimg");
	for(var i = 0; i < ornaments.length; i++) {
		ornaments[i].src = color + ".png";
	}
}
	
function cloneOrnament(element) {
	var spanStr = element + "span";
	var cloneStr = element + "clone";
	var spaceStr;
	if(element == "ornament") {	
		spaceStr = "ornamentspace";
	} else {
		spaceStr = "lightspace";
	}

	var node = $(spanStr);
	var left = node.offsetLeft;
	var top = node.offsetTop;
	
	var newNode = node.cloneNode(true);
	newNode.id = cloneStr;
	newNode.style.position = "absolute";
	
	newNode.style.left = left + "px";
	newNode.style.top = top + "px";
	$(spaceStr).appendChild(newNode);
	new Draggable(newNode, {revert: 'failure', onEnd:dragEnd});
}

function thingDrop(drag) {
	if(!drag.hasClassName("moved") && !drag.hasClassName("star")) {
		var dragImg = drag.getElementsByTagName("img")[0];
		dragImg.removeClassName(dragImg.className);
		drag.addClassName("moved");
		
		var element = drag.id.substring(0,drag.id.length - 5);
		cloneOrnament(element);
		if(element == "lightflash") {
			setInterval(function() {
				Effect.Pulsate(drag, { pulses: Math.floor((Math.random()*3)+1), duration: .6 }); 
				}, 600);
		}
	}
}

function dragEnd(draggable, event) {
	var dragElement = draggable.element;
	var treeElement = $("tree");
	
	if (dragElement.hasClassName("moved")) {
		var elementX = dragElement.offsetLeft;
		var elementXWidth = parseInt($("ornamentspan").getElementsByTagName("img")[0].style.width);
		var elementY = dragElement.offsetTop;
		var elementYHeight = parseInt($("ornamentspan").getElementsByTagName("img")[0].style.height);
		var treeX = treeElement.offsetLeft;
		var treeY = treeElement.offsetTop;
		
		if(elementX <= treeX || elementX + elementXWidth >= treeX + parseInt($("treeimg").style.width)
			|| elementY + elementYHeight <= treeY || elementY >= treeY + parseInt($("treeimg").style.height)) {
				dragElement.remove();
		}
	}
	
}
	
function clearTree() {
	var ornaments = $$(".ornament");
	for(var i = 0; i < ornaments.length; i++) {
		if(ornaments[i].hasClassName("moved")) {
			ornaments[i].remove();
		}
	}
}

function startOver() {
	document.location.href = "http://students.washington.edu/kershm/christmas/";
}	