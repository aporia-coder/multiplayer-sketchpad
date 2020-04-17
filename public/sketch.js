function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  socket = io.connect("/");
  socket.on("mouse", (data) => {
    fill(100, 0, 30);
    noStroke();
    ellipse(data.mouseX, data.mouseY, 25);
  });
}

function mouseDragged() {
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 25);
  let data = {
    mouseX,
    mouseY,
  };
  socket.emit("mouse", data);
}

function draw() {}
