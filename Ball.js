class Ball{
    constructor(x,y,r){
        var options = {
            restitution: 0 
        }
        this.body = Bodies.circle(x,y,r,options)
        World.add(world,this.body)
    }
    display(){
        ellipseMode(CENTER)
        fill("white");
        ellipse(this.body.position.x,this.body.position.y,this.r)
    }
}