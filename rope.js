class sling {
    constructor(bodyA,pointB){//Xoffset,Yoffset
        //this.Xoffset = Xoffset
        //this.Yoffset = Yoffset
        var options = {
            bodyA : bodyA,
            pointB : pointB,
           // pointB:{x:this.Xoffset, y:this.Yoffset}
            stiffness : 1,
            angularStiffness : 1,
            length : 220
        }
        this.pointB = pointB;
        this.pointX = bodyA.x;
        this.pointY = bodyA.y - 250;
        this.sling = Matter.Constraint.create(options);
        World.add(world,this.sling)
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            strokeWeight(3.5);
            stroke("red");
            line(pointB.x, pointB.y, pointA.x, pointA.y);
            pop();
        }
    }
}