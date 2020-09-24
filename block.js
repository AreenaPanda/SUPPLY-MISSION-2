class Block{
    constructor(x,y,width,height){
        World.add(world,this.body);
    }


display(){
    rectMODE(CENTER);

    fill(255,0,0);
    rect(0,0,this.width,this.height);
}
}
