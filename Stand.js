class Roof {
    constructor(x,y,width,height){
        var opt = {
            isStatic : true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,opt);
        
        World.add(world,this.body);
    }

    display(){
        push();
        rectMode(CENTER);
        fill("gold");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}