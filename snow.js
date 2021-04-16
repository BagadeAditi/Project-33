class Snow {
    constructor(x,y,r){
        var options={
        isStatic:false,
        density:2
    } 
   this.x=x;
   this.y=y;
   this.r=r
   this.body=Bodies.circle(x,y,r,options);
   this.image=loadImage("snow4.webp");
   this.image.scale=0.5
   World.add(world,this.body)
}

display(){
    push ();
    translate (this.body.position.x,this.body.position.y);
    rotate (this.body.angle);
    imageMode (CENTER);
    image (this.image,0,0,this.r,this.r);
    pop ();

}
}