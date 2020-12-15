class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    Matter.Body.setMass(this.body, this.body.mass * 3);
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    
    super.display();
  }
}
