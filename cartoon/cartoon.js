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
    ctx.arc(x + 70, y - 50, 50, Math.PI * 1, Math.PI * 1.85);
    ctx.arc(x + 152, y - 45, 30, Math.PI * 1.37, Math.PI * 1.91);
    ctx.arc(x + 190, y, 50, Math.PI * 1.5, Math.PI * 0.5);
    ctx.moveTo(x + 180, y + 50);
    ctx.lineTo(x, y + 50);
    ctx.strokeStyle = "#87cefa";
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fill()
}
drawCloud(50,115);
drawCloud(350,135);
drawCloud(650,135);


//tree

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
drawHouse("#A2322E");

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
drawRocks(600,495);
drawRocks(580,495);
drawRocks(575,495);
drawRocks(565,495);
drawRocks(555,495);
drawRocks(540,495);


function writeText(){
    ctx.font="25px Roboto";
    ctx.fillText("Welcome to my neighborhood!",100,350);
   
}
writeText();
