class Roof{
    constructor(x,y,w,h){
        var options = {
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
    }
    display(){
        var groumdPos = this.body.position;
        push();
        translate(groundPos.x,groundPos.y);
        fill(128,128,128)
        rect(0,0,this.width,this.heigt);
        pop();
    }
}