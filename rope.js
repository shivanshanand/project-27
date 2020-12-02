class rope {
    constructor(b1, b2,offset1,offset2){
        this.offset1=offset1;
        this.offset2=offset2;
        var options ={
            bodyA: b1,
            bodyB: b2,
            pointB:{x:this.offset1,y:this.offset2}
            
        }

        this.rope=Constraint.create(options)
        World.add(world,this.rope);
    }

    display(){

        var pos1=this.rope.bodyA.position
        var pos2=this.rope.bodyB.position

        line(pos1.x,pos1.y,pos2.x+this.offset1,pos2.y+this.offset2);
    }
}