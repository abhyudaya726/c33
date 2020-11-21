class Partical{
    constructor(x,y){
        var options = {
            isStatic:false,
            density:3.0,
            restitution:1.0
        }
        this.body = Bodies.circle(x,y,5,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        fill(this.color);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,5,5);
        pop();
    }
}