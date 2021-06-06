class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:25
        }
        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain)
    }
    fly(){
        this.chain.bodyA = null
    }
    //attach(){
        //this.chain.bodyA = polygon.body
    //}
    display(){
        if (this.chain.bodyA){
            push()
            var pointA = this.chain.bodyA.position
            var pointB = this.pointB
            stroke(100, 255, 255)
            strokeWeight(4)
            line(pointA.x, pointA.y, pointB.x, pointB.y)
            pop()
        }
    }
}