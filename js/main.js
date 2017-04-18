/**
 * Created by freya on 2017/4/18.
 */
var canvas;
var context;
function init() {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    w = canvas.width;
    h = canvas.hright;
    gameLoop()
}
document.body.onload = init;

function gameLoop() {

    
    drawBackground()
}


function drawBackground() {
    context.fillStyle = '#393550';
    context.fillRect(0,0,w,h);
}






























