class Block{
  constructor(x, y, width, height) {
        
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.Visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      //this.visibility = Visibility;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position
      
          //rectMode(CENTER);
         // rect(pos.x,pos.y,this.width, this.height);
          //imageMode(CENTER)
          //image(this.image,pos.x,pos.y,this.width,this.height)

      if(this.body.speed>3){
    
        World.remove(world,this.body);
        push()
        this.Visibility = this.Visibility -5;
        tint(255,this.Visibility);
        image(this.image,this.body.position.x,this.body.position.y,30,40);
        pop()
      }
        else{
          rectMode(CENTER);
          rect(pos.x,pos.y,this.width, this.height);
          imageMode(CENTER)
          image(this.image,pos.x,pos.y,30,40);

        }
      }
      }


    
