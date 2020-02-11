function setup() {

  createCanvas(400, 400);
}

function draw() {
  background(255);
  for (let i = 0; i < 8; i++) {
    for(let j = 0;j <8;j++){
  console.log(i);
      rect(i*50, j*50, 40, 40);
    }
}
  translate(width/2,height/2);
  rotate(PI/4.0);
  rect(-26,-26,40,40);
}
