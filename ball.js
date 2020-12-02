class ball{
    constructor(x,y,radius){
        var op={
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,radius/2,op);
        this.radius= radius/2;
        World.add(world,this.body);
    }

    display(){

       
        push(); 
        
        translate(this.body.position.x, this.body.position.y ); 
        rotate(this.body.angle);
        ellipse(0,0, this.radius, this.radius); 
        pop();
    }
}