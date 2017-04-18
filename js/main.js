/**
 * Created by freya on 2017/4/18.
 */
var canvas;
var context;
var girlPic = new Image();
function init() {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    w = canvas.width;
    h = canvas.height;
    girlPic.src = 'img/girl.jpg';
    gameLoop();
}
document.body.onload = init;

function gameLoop() {

   window.requestAnimationFrame(gameLoop);
    drawBackground();
    drawGirl();
}


function drawBackground() {
    context.fillStyle = '#393550';
    context.fillRect(0,0,w,h);
}

function drawGirl() {
    context.drawImage(girlPic,100,150,600,300);
}




























