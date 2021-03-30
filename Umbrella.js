class Umbrella {
    constuctor(x,y){
        var option = {
            isStatic:true,

        }
        this.image = loadImage("walking_1.png")
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world,this.umbrella);
    }
    display(){
        var pos = this.umbrella.position;
        imageMode(CENTRE);
        image(this.image,pos.x,pos.y+70,300,300);
    }
}