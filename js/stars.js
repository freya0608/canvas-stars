/**
 * Created by freya on 2017/4/18.
 */

var starObj = function () {
    this.x;
    this.y;

    this.picNo;
    this.timer;

    this.xSped;
    this.ySped;

};

starObj.prototype.init = function () {
    this.x = Math.random()*600+100;//[0,1)
    this.y = Math.random()*300+150;

    this.picNo = Math.floor(Math.random()*7);
    this.timer = 0;

    this.xSped = Math.random()*3;
    this.ySped = Math.random()*3;
};
starObj.prototype.update = function () {

    this.x +=this.xSped*daltaTime*0.002;
    this.y +=this.ySped*daltaTime*0.002;

    this.timer += daltaTime;
    if(this.timer>50){
        this.picNo += 1;
        this.picNo %= 7;
        this.timer = 0;
    }

};

starObj.prototype.draw = function () {
    context.drawImage(starPic,this.picNo*7,0,7,7,this.x,this.y,7,7);
};

function drawStars() {
    for(var i=0;i<num;i++){
        stars[i].update();
        stars[i].draw();
    }
}
