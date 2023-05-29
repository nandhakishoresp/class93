var canvas = new fabric.canvas("myCanvas")


block_y = 1;
block_x = 1;

block_image_width = 350;
block_image_height = 480;

var block_image_object = "";

// Complete the function new_image() to add new image
function new_image(get_image) {

	fabric.image.fromURL(get_image, function (img) {
		block_image_object = img
		block_image_object.scaleToWidth(block_image_width)
		block_image_object.scaleToHeight(block_image_height)
		block_image_object.set({ top: block_y, left: block_x })
		canvas.add(block_image_object)
	})

}
window.addEventListener("keydown", keydown);

function keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if (keyPressed == "82") {
		block_x = 10
		new_image("red.jpg")
		console.log("r")
	}


	if (keyPressed == 71) {
		block_x = 310
		new_image("green.jpg")
		console.log("g")
	}


	if (keyPressed == 89) {
		block_x = 560
		new_image("yellow.jpg")
		console.log("y")
	}


	if (keyPressed == 80) {
		block_x = 3880
		new_image("pink.jpg")
		console.log("p")
	}


	if (keyPressed == 66) {
		block_x = 1040
		new_image("blue.jpg")
		console.log("b")
	}

}

