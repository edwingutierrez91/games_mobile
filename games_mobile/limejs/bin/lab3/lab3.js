//set main namespace
goog.provide('lab3');


//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Sprite');
goog.require('lime.fill.LinearGradient');
goog.require('lime.Label');
goog.require('goog.math');

// entrypoint
lab3.start = function(){

    var director = new lime.Director(document.body,480,320);
    director.makeMobileWebAppCapable();
    director.setDisplayFPS(false);
    
    var scene1 = new lime.Scene().setRenderer(lime.Renderer.CANVAS);
    
    //grass
    var grass_gradient = new lime.fill.LinearGradient().setDirection(0,0,1,-1)
        .addColorStop(0,'#16B5F3').addColorStop(0.5, '#E9F3F7');
    
    var grass = new lime.Sprite().setSize(480,320).setPosition(0,0).
        setAnchorPoint(0,0).setFill(grass_gradient);
    
    //bug count
    var num_bugs_catched = 0;
    var bug_count = new lime.Label().setText('Bichos: '+num_bugs_catched).
        setFontFamily('Arial').setFontColor('#000000').setFontSize(20).
        setPosition(100,300);
    
    //box
    var box = new lime.Sprite().setAnchorPoint(0,0).setPosition(390,230).setFill('img/box.png');
    
    //number of bugs to be created
    var num_bugs = goog.math.randomInt(10)+1;
    
    scene1.appendChild(grass);
    scene1.appendChild(box);
        
    var x,y, bug;
    for(var i = 0; i <= num_bugs; i++) {
        x = goog.math.uniformRandom(20,440);
        y = goog.math.uniformRandom(50,200);
        
        bug = new lime.Sprite().setAnchorPoint(0,0).setFill('img/bug.png').setPosition(x,y).setSize(40,37);
        scene1.appendChild(bug);
        
        //drag and drop
        goog.events.listen(bug, ['mousedown', 'touchstart'], function(e) {
            var drag = e.startDrag();
            e.event.stopPropagation();
            
            drag.addDropTarget(box);
            bug = this;
            goog.events.listen(drag, lime.events.Drag.Event.DROP, function(e) {
                
                num_bugs_catched++;
                bug_count.setText('Bichos: '+num_bugs_catched);
                
                bug.setHidden(true);
                delete bug;
            });
        });
    }
    
    scene1.appendChild(bug_count);
    director.replaceScene(scene1);        
}
goog.exportSymbol('lab3.start', lab3.start);