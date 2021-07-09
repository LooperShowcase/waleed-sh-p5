function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background("black");
  let seconds = second();
  let minutes = minute ();
  let hours = hour();

  translate(width / 2, height / 2);
  rotate(-90);
  strokeWeight(8)

  // seconds
  noFill();
  stroke(255, 214, 10);
  let secArc = map (seconds, 0 , 60 , 0 , 360);
  arc(0,0 , 300 , 300 , 0, secArc);
  
 // minute
  noFill();
  stroke(0, 53, 102)
  let minArc = map(minutes, 0, 60, 0, 360);

  // hours
  noFill();
  stroke(0, 29, 61)
  let hArc = map(hours % 12, 0, 12, 0, 360);

  push();
stroke(255, 214, 10);
  rotate(secArc);
  line(0, 0, 145, 0);
  pop();

  push();
  stroke(0, 53, 102)
 rotate(minArc);
  line(0, 0, 125, 0);
  pop();

  push();
  stroke(0, 29, 61);
  rotate(hArc);
  line(0, 0, 100, 0);
  pop();
 
 rotate(90);

  stroke(255, 214, 10)
  strokeWeight(1)
  text(3,160,0);

  text(6,0,170);

  text(12,0,-160);

  text(9,-170,0)

  text(1,80,-145)
  text(2,143,-95)
 
  text(4,140,100)

text(5,80, 160)

text(7,-80, 150)

text(8,-140,90)

text(10,-150,-100)

text(11,-90,-140)



textSize(15)
text("waleed",-20,-90)

}