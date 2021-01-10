class Mango{
    constructor(x, y, width, height) {
        var options= {
            'isStatic' : true,
            'friction':0.5,
            'density':1.2
      }
       this.body = Bodies.rectangle(x, y, width, height, options);
       World.add(world, this.body);
       this.image = loadImage("sprites/mango.png");
    }
  
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        pop();
    }
}
    //mango on the tree 
    //isstatic false

    //how will it hang? - by itself
                 //     - with a branch or how?
