var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
   
function drawRect(x,y,color){ //creates rectangle
    ctx.fillStyle = color; // making rectangle 
    ctx.fillRect(x, y, canvas.width, canvas.height);

} 
drawRect(0,0,"blue");

function makeSun(x, y, radius, color) { //makes the sun

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}
makeSun(950, 50, 40, "yellow");

function drawCloud(x,y) { //cloud fix this 
    ctx.beginPath();
    ctx.arc(x, y, 70, Math.PI * 0.5, Math.PI * 1.5);
    ctx.arc(x + 80, y - 60, 70, Math.PI * 1, Math.PI * 1.85);
    ctx.arc(x + 152, y - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
    ctx.arc(x + 200, y, 60, Math.PI * 1.5, Math.PI * 0.5);
    ctx.moveTo(x + 200, y + 60);
    ctx.lineTo(x, y + 60);
    ctx.strokeStyle = '#797874';
    ctx.stroke();
    ctx.fillStyle = '#8ED6FF';
    ctx.fill()
}
drawCloud(100,135);

function drawGrass(x,y,color){ //creates rectangle
    ctx.fillStyle = color; // making rectangle 
    ctx.fillRect(x, y, canvas.width, 200 );
}
drawGrass(0,500,"green")

function drawHouse(){ //fence
    ctx.beginPath();
    ctx.strokeStyle = "brown";
    ctx.lineWidth = '10';
    ctx.beginPath();
    ctx.moveTo(750,300);
    ctx.lineTo(750, 500);
    
    ctx.moveTo(750,300);
    ctx.lineTo(950, 300);

    ctx.moveTo(950,300);
    ctx.lineTo(950, 500);
    ctx.stroke();
}
drawHouse();


