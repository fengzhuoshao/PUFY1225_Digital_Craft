function setup() {
 createCanvas(500, 500);
 background(0);
 rectMode(CENTER);
 colorMode(HSB,360,100,100);
}
function draw() {
 for(let x=0; x<550; x+=50){
  for(let y=0; y<550; y+=50){
   stroke(random(360),100,100);
   fill(random(360),100,100);
   rect(x,y,random(50),random(50));
  }
 }
}
