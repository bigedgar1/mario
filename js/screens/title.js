game.TitleScreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	
            me.game.world.addChild( new me.Sprite (0, 0, me.loader.getImage('title-screen')), 3);
            me.input.bindkey(me.input.KEY.ENTER, "start");
            
            me.game.world.addChild(new (me.Renderable.extend ({
                init: function(){
                 this._super(me.Renderable, 'init', [510, 30, me.game.viewport.width, me.game.viewport.width]);
                 this.font = new me.font("Arial", 46, "white");
                },
                
           
           draw: function(renderer) {
                 this.font.draw(renderer.getContext(),"marioish", 450, 130);
                 this.font.draw(renderer.getContext(), "press ENTER to play!", 250, 530);
                }
           
         })));
          
            
            this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge){
             if(action === "start"){
                 me.state.change(me.state.PLAY);
     }
            });
        },
                
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
       me.input.unbindKey(me.input.key.ENTER);
       me.event.unsbscribe(this.handler);
	}
});
