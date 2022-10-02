var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//background color
function drawRect(x,y,color){ //creates rectangle
    ctx.fillStyle = color; 
    ctx.fillRect(x, y, canvas.width, canvas.height);
} 
drawRect(0,0,"#87cefa");

//sun 
function makeSun(x, y, radius, color) { //makes the sun
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}
makeSun(950, 50, 40, "#ffc922");

//clouds
function drawCloud(x,y) { //cloud fix this 
    ctx.beginPath();
    ctx.arc(x, y, 50, Math.PI * 0.5, Math.PI * 1.5);
    ctx.arc(x + 70, y - 60, 40, Math.PI * 1, Math.PI * 1.85);
    ctx.arc(x +115, y - 51, 05, Math.PI * 1.37, Math.PI * 1.91);
    ctx.arc(x + 140, y, 50, Math.PI * 1.5, Math.PI * 0.5);
    ctx.moveTo(x + 90, y + 50);
    ctx.lineTo(x, y + 30);
    ctx.strokeStyle = "#87cefa";
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fill()
}
drawCloud(50,115);
drawCloud(350,135);
drawCloud(650,135);

//ground color 
function drawGrass(x,y,color){ //creates rectangle
    ctx.fillStyle = color; // making rectangle 
    ctx.fillRect(x, y, canvas.width, 200 );
}
drawGrass(0,500,"green")

//drawing a house
function drawHouse(color){
ctx.fillStyle= color;
ctx.beginPath();
ctx.moveTo(600,350);
ctx.lineTo(600,500);
ctx.lineTo(750,500);
ctx.lineTo(750,350);
ctx.closePath();
ctx.fill();
//windows
ctx.fillStyle="#663300";
ctx.fillRect(622,388,35,50);
ctx.fillStyle="#FFFFFF";
ctx.fillRect(625,390,13,23);
ctx.fillRect(640,390,13,23);
ctx.fillRect(640,415,13,21);
ctx.fillRect(625,415,13,21);
//door
ctx.fillStyle = "black";
ctx.fillRect(700,400,30,100);
//door knob
ctx.beginPath();
ctx.fillStyle = "#F2F2F2";
ctx.arc(720,450,3,0,2*Math.PI);
ctx.fill();
ctx.closePath();
} 
drawHouse("brown");

   //ctx.ellipse(150, 495, 20, 10, 0, 0, Math.PI*2);
    //ctx.fillStyle = "grey";
    //ctx.fill();
    

//for loop rocks 
function drawRocks(x,y){
    ctx.beginPath();
    ctx.fillStyle= "grey";
    ctx.arc(x,y,10,0,Math.PI*2,true)
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
}
//rocks on the left of the house
drawRocks(600,495);
drawRocks(590,495);
drawRocks(570,495);
drawRocks(585,495);

//rocks on the right side of the house
drawRocks(760,495);
drawRocks(750,495);
drawRocks(775,495);
drawRocks(790,495);


//drawing roof over house 

function drawRoof(){
    ctx.fillStyle="black";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(600,350);
    ctx.lineTo(675,250);
    ctx.lineTo(750,350);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

drawRoof();


//draw tree

function drawTree(x, y) {
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 50, y-50);
    ctx.lineTo(x + 100, y);
    ctx.fill();
  }
  //left side of the house
  drawTree(800, 400); 
  drawTree(800, 425); 
  drawTree(800, 450); 
  ctx.fillStyle = "brown";
  ctx.fillRect(835, 450, 30, 50);


  //right side of the house
  drawTree(470, 400); 
  drawTree(470, 425); 
  drawTree(470, 450); 
  ctx.fillStyle = "brown";
  ctx.fillRect(505, 450, 30, 50);


function writeText(){
    ctx.font="20px Roboto";
    ctx.fillText("Welcome to my neighborhood!",100,350);
   
}
writeText();
