class bob{
 constructor(x, y, radius, angle) {
     var options = {
         'restitution':0.8,
         'density':1.0
        }
     this.body=Bodies.circle(x,y,radius,options);
     this.radius=radius;
     World.add(world,this.body);
    }
 display(){
     push()
     translate(this.body.position.x,this.body.position.y)
     ellipseMode(RADIUS);
     ellipse( 0, 0,this.radius);
     pop();
    }
}
