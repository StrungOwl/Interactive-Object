//WebGL 

let lightC; //ambient light color
let backC; //background color
let r = 0; //rotation
let angle = 0;
let s; //size

function setup() {
  
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  colorMode(HSB);
    
  lightC = 0;
  backC = color(random(0, 360), 50, 100);
  s = width*0.1
  
  background(backC, 50, 100);
  
  
}

function draw() {
  //Stroke draws lines on background 
  
  background(backC, 50, 100);
  
  //Sphere
  x = sin(radians(angle))*width*0.05;
  y = cos(radians(angle))*width*0.05;
  z = cos(radians(angle))*width*0.1; 
 
  //Torus
  x1 = sin(radians(-angle))*width*0.05;
  y1 = cos(radians(-angle))*width*0.05;
  z1 = cos(radians(-angle))*width*0.05;
  
    
  //box
  x2 = sin(radians(angle))*width*0.3;
  y2 = cos(radians(angle))*width*0.2;
  z2 = cos(radians(angle))*width*0.2;
  

  //LIGHT -------------------------------------------------------------------
  ambientLight(lightC, 100, 100); 
  directionalLight(lightC + 100, 100, 100, 1, 0, -1.5); //h,s,b,x,y,z direction

  //SPHERE -------------------------------------------------------------
  push(); 
  translate(x, y, z);
  rotate(radians(r)); //I want rotate to happen after translate
  
  stroke(lightC+200, 100, 100, 0.1);
  ambientMaterial(0, 0, 100); //white
  sphere(width*0.05); //diameter 
  pop();
  
  //TORUS --------------------------------------------------------------
  push();
  stroke(lightC+200, 50, 50, 0.1);
  rotateY(radians(r));
  translate(x1 - width*0.1, y1, z1);
  torus(width*0.1, width*0.025); //radius, tube radius
  pop(); 
  
  //BOX ---------------------------------
  
//   push();
//   //rotate(radians(angle));
//   stroke(lightC+200, 50, 50, 0.1);
//   rotateY(radians(angle));
//   rotateX(radians(angle));
//   rotateZ(radians(angle));
//   //translate(x2, y2, z2);
//   box(s); //radius, tube radius
//   pop(); 
  
  //ANIMATION ----------------------------------------------------------
  lightC += 0.05; 
  lightC = lightC % 360;
  
  r = mouseX;
  angle += 1; 
  s += 1;

  
  if(s > width*0.3 || s > height*0.3){
    s = -s; 
  }
  
  
}

function mousePressed(){
  background((backC), 100, 100);
}

