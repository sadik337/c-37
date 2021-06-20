class Form{
    constructor(){
       
        this.input=createInput("Name")
        this.button=createButton('play')
        this.greeting=createElement('h2')
    }

   hide()
{
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
 

}
    display(){
        var title=createElement('h1')
       title.html("car racing game")
       title.position(400,0);

       this.input.position(400,160);
       this.button.position(450,200)
 
       this. button.mousePressed(()=>{
        this.input.hide();  
        this.button.hide();  
        player.name=this.input.value();
        playerCount+=1;
        player.index=playerCount;
        player.updateCount(playerCount);
        this.greeting=createElement('h3')
        this.greeting.html("ON FIRE"  +player.name)
        this.greeting.position(130,160);
       })
    }
}










