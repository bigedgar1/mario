// TODO
game.PlayerErentity = me.Entity.extend({
    init: function(x, y, settings){
        this._super(me.Entity, 'init', [x, y, {
                image:"mario",
                spritewidth: "128",
                spriteheight: "128",
                width: 128,
                height: 128,
                getShape: function (){
                 return (new me.Rect(0, 0, 30, 128)).toPolygon();      
               } 
        }]);
         
        this.renderable.addAnimation("idle", [3]);
        this.renderable.addAnimation("smallwalk", [8, 9, 10, 11, 12, 13], 80);
        this.renderable.setCurrentAnimation("idle");
        
        //the first  number sets the speed mario move on x axis, the second sets the speed on the y axis
         this.body.setVelocity(5, 20);
         me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
    },
    
    update: function(delta){
     if(me.input.iskeypressed("right")){
         this.renderable.setCurrentAnimation("smallwalk");
         this.body.vel.x += this.body.accel.x * me.timer.tick;
     }else{
         this.body.vel.x = 0;  
       }   
      
      
          this.body.update(delta);
          me.collision.check(this, true, this.collideHandler.bind(this), true);
        
        if(this.body.vel.x !== 0) {
            if (!this.remderable.setCurrentAnimation("smallwalk")) {
                this.remderable.setCurrentAnimation("smallwalk");
            }
       }else{
            this.renderable.setCurrentAnimation("idle");
       }
   
   
   
    
       this._super(me.Entity, "update", [delta]);
         return true;
    },
    
    collidenhandler: function(response){
  
    }
});
    
game.leveltrigger = me.Entity.extend({
   init: function(x, y, settings) {
       this._super(me.Entity, 'init', [x, y, settings]);
       this.body. onCollision = this.onCollision.bind(this);
       this.level = settings.level;
       this.xspawn = settings.xspawn;
       this.yspawn = settings.yspawn;
   },
   
   onCollision: function() {
       this.body.setCollisionmask(me.collision.types.NO_OBJECT);
       me.levelDirector.loadLevel(this.level);
       me.state.current().ressetplayer(this.xspawn, this.yspawn);
       
   }
   
});  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    