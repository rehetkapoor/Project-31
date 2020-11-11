class Plinko{
    constructor(x, y) {

    var options={
      density: 1.2,
      isStatic: true
    }

        this.body = Bodies.circle(x, y, 10, options);
        World.add(world, this.body);
      }
      display(){
        push();
        ellipseMode(RADIUS);
        fill("white")
        translate(this.body.position.x, this.body.position.y)
        ellipse(0, 0, 10, 10);
        pop();
      }
}
