img = "";

function preload() {
    img = loadImage('Bed.jfif')
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    Image(img, 0, 0, 640, 420);
    fill("#FF0000");
    Text("Bed", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
}