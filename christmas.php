<!DOCTYPE html>
<html>
	<!--
	Melissa Kersh, Christmas project 2012
	You should use this.
	Your JS code should work. :P
	-->
	
	<head>
		<title>Christmas Tree app</title>

		<!-- Melissa-provided JavaScript files; do not modify -->
		<script src="https://ajax.googleapis.com/ajax/libs/prototype/1.7.0.0/prototype.js" type="text/javascript"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/scriptaculous/1.9.0/scriptaculous.js" type="text/javascript"></script>

		<!-- mai files -->
		<link href="christmas.css" type="text/css" rel="stylesheet" />
		<script src="christmas.js" type="text/javascript"></script>
	</head>

	<body>
		
		<h3 id="loading"> Loading... </h3>
		<span id="hide" style="display: none;">
			<span id="snow"><img id="snowimg" src="snow.png" alt="Snow" /></span>
			<span id="tree"><img id="treeimg" src="<?= $_GET['tree'] ?>" alt="Christmas Tree" /></span>
			<span id="snowman"><img id="snowmanimg" src="snowman.gif" alt="Snowman" /></span>
			
			<span class="ornaments">
				<span class="ornament star"><img id="starimg" src="<?= $_GET['star'] ?>" alt="Star" /></span>
			</span>
			
			<span class="ornaments" id="ornamentspace">
				<select id="ornamentcolors" name="ornamentcolors">
					<option value="red">red</option>
					<option value="orange">orange</option>
					<option value="yellow">yellow</option>
					<option value="green">green</option>
					<option value="blue">blue</option>
					<option value="purple">purple</option>
					<option value="pink">pink</option>
					<option value="brown">brown</option>
					<option value="gold">gold</option>
					<option value="silver">silver</option>
					<option value="white">white</option>
					<option value="black">black</option>
				</select>
				<span id="ornamentspan" class="ornament"><img class="ornamentimg" src="red.png" alt="Ornament" /></span>
			</span>
			
			<span class="ornaments" id="lightspace">
				<select id="lightcolors" name="lightcolors">
					<option value="whitel">white</option>
					<option value="redl">red</option>
					<option value="orangel">orange</option>
					<option value="yellowl">yellow</option>
					<option value="greenl">green</option>
					<option value="bluel">blue</option>
					<option value="purplel">purple</option>
					<option value="pinkl">pink</option>
					<option value="goldl">gold</option>
				</select>
				<span id="lightspan" class="ornament"><img class="lightimg" src="whitel.png" alt="Light" /></span>
				<span id="lightflashspan" class="ornament"><img class="lightflashimg" src="whitel.png" alt="Light" /></span>
			</span>
			</br>
			<button id="clear">Clear Tree</button>
			<button id="startover">New</button>
		</span>
		<span id="bkgdcolor" style="display: none;"><?= $_GET['bkgd'] ?></span>
	</body>
</html>
