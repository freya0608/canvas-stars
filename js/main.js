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

var switchy = false;
var life = 0;

function init() {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    w = canvas.width;
    h = canvas.height;

    girlPic.src = 'img/girl.jpg';
    starPic.src = 'img/star.png';

    document.addEventListener("mousemove",mousemove,false);

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
    //console.log(daltaTime);
    drawBackground();
    drawGirl();
    drawStars();
    aliveUpdate();
}


function drawBackground() {
    context.fillStyle = '#393550';
    context.fillRect(0,0,w,h);
}

function drawGirl() {
    context.drawImage(girlPic,100,150,600,300);
}

function mousemove(e) {
    if(e.offsetX || e.offsetY){
        var px = e.offsetX == undefined ? e.layerX : e.offsetX;
        var py = e.offsetY == undefined ? e.layerY : e.offsetY;

        if(px>100 && px<700 && py>150 && py<450){
            switchy = true;
        }else {
            switchy = false;
        }
        //console.log(switchy);
    }
    //console.log(px);
}


























