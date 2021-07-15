class Paper
{
	constructor()
	{
		var options={
			restitution:0.3,
            friction:0,
            density:1.2
            

			}
	
		this.body=Bodies.circle(250,540,25, options);
        this.image=loadImage("paper.png")
 		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		
var angle=this.body.angle
			push()
			translate(pos.x, pos.y);
			rotate(angle);
			//strokeWeight(4);
            imageMode(CENTER);
			fill(128,128,128)
			image(this.image,0,0,70,70);
			pop()
	
			
			
	}

}

