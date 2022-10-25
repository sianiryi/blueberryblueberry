class Mover {
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel =  p5.Vector.random2D();
    this.vel.mult (random(1));
  }
  
  
  update(){
    let sco = createVector(400,0);
    
    this.acc =  p5.Vector.sub(sco, this.pos);
    this.acc.setMag (0.100);
    
    this.vel.add(this.acc);
    this.pos.add(this.vel); 
    
  }
  show(){
   

   
   stroke(r,g, b) 
    line(10,500, 10,this.pos.y)
    stroke(r,g, b,60) 
    line(20,this.pos.x, 20,200) 
    stroke(r,g, b) 
    line(30,200, 30,this.pos.y)
        stroke(r,g, b,60) 

    line(40,this.pos.x, 40,200)
    stroke(r,g, b) 
    line(50,200, 50,this.pos.y)
        stroke(r,g, b,60) 

    line(60,this.pos.x, 60,200)
    stroke(r,g, b) 
    line(70,200, 70,this.pos.y)
        stroke(r,g, b,60) 

    line(80,this.pos.x, 80,200)
    stroke(r,g, b) 
    line(90,200, 90,this.pos.y)
        stroke(r,g, b,60) 

    line(100,this.pos.x, 100,200) 
    stroke(r,g, b) 
    line(110,200, 110,this.pos.y)
        stroke(r,g, b,60) 

    line(120,this.pos.x, 120,200)
    stroke(r,g, b) 
    line(130,200, 130,this.pos.y)
        stroke(r,g, b,60) 

    line(140,this.pos.x, 140,200)
    stroke(r,g, b) 
    line(150,200, 150,this.pos.y)
        stroke(r,g, b,60) 

    line(160,this.pos.x, 160,200)
    stroke(r,g, b) 
    line(170,200, 170,this.pos.y)
        stroke(r,g, b,60) 

    line(180,this.pos.x, 180,200) 
    stroke(r,g, b) 
    line(190,200, 190,this.pos.y)
        stroke(r,g, b,60) 

    line(200,this.pos.x, 200,200)
    stroke(r,g, b) 
    line(210,200, 210,this.pos.y)
        stroke(r,g, b,60) 

    line(220,this.pos.x, 220,200)
    stroke(r,g, b) 
    line(230,200, 230,this.pos.y)
        stroke(r,g, b,60) 

    line(240,this.pos.x, 240,200)
    stroke(r,g, b) 
    line(250,200, 250,this.pos.y)
        stroke(r,g, b,60) 

    line(260,this.pos.x, 260,200) 
    stroke(r,g, b) 
    line(270,200, 270,this.pos.y)
        stroke(r,g, b,60) 

    line(280,this.pos.x, 280,200)
    stroke(r,g, b) 
    line(290,200, 290,this.pos.y)
        stroke(r,g, b,60) 

    line(300,this.pos.x, 300,200)
    stroke(r,g, b) 
    // line(150,200, 310,this.pos.y)
    // line(160,this.pos.x, 160,200)
  }

edges(){
    if (this.pos.y <= 0){
    this.pos.y = 0;
    this.vel.y *=-1;
     }
    if (this.pos.x >= height){
    this.pos.x = height;
    this.vel.x *=-1;
     }
  }

  
  

}
    
   
 