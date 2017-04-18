/**
 * Created by freya on 2017/4/18.
 */
var canvas;
var context;
var girlPic = new Image();
var starPic = new Image();

var num = 60;
var stars = [];

var lastTime;
var daltaTime;


function init() {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    w = canvas.width;
    h = canvas.height;
    girlPic.src = 'img/girl.jpg';
    starPic.src = 'img/star.png';
    for(var i=0;i<num;i++){
        var obj = new starObj();
        stars.push(obj);
        stars[i].init();
    }

    lastTime = Date.now();

    gameLoop();
}
document.body.onload = init;

function gameLoop() {

   window.requestAnimationFrame(gameLoop);

    var now = Date.now();
    daltaTime = now - lastTime;
    lastTime = now;
    console.log(daltaTime);
    drawBackground();
    drawGirl();
    drawStars()
}


function drawBackground() {
    context.fillStyle = '#393550';
    context.fillRect(0,0,w,h);
}

function drawGirl() {
    context.drawImage(girlPic,100,150,600,300);
}




























