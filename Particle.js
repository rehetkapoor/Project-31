class Particle{
    constructor(x, y) {

        this.body = Bodies.circle(x, y, 10);
        this.color=color(random(0,255), random(0,255), random(0,255))
        World.add(world, this.body);
      }
      display(){
        push();
        ellipseMode(RADIUS);
        fill(this.color)
        translate(this.body.position.x, this.body.position.y)
        ellipse(0, 0, 10, 10);
        pop();
      }
}
