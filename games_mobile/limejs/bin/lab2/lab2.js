//set main namespace
goog.provide('lab2');

//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Sprite');
goog.require('lime.Polygon');
goog.require('lime.fill.LinearGradient');
goog.require('lime.animation.MoveTo');
goog.require('lime.animation.RotateBy');
goog.require('lime.animation.FadeTo');

// entrypoint
lab2.start = function(){

	var director = new lime.Director(document.body,800,640),
	    scene = new lime.Scene();
    director.setDisplayFPS(false);

    //Sky
    var sky_gradient = new lime.fill.LinearGradient().setDirection(0,0,1,1)
        .addColorStop (0,'#FFFFFF')
        .addColorStop(1, '#2E9AFE');

    var sky = new lime.Sprite().setSize(800,600).setPosition(0.0)
        .setAnchorPoint(0.0).setFill(sky_gradient);

    var grass = new lime.Sprite().setSize(800,40).setPosition(0,600).setAnchorPoint(0,0).setFill('#9AFE2E');

    var platform = new lime.Polygon().setPosition(100,560).setAnchorPoint(0.0).setFill('#848484')
    .addPoints(-40,40,0,0, 600,0, 640, 40, -40 , 40);

    //Rocket
    var rocket = new lime.Sprite().setSize(80,140).setFill('img/rocket.png').setPosition(360,420).setAnchorPoint(0,0);
    var rocket2 = new lime.Sprite().setSize(80,140).setFill('img/rocket.png').setPosition(160,420).setAnchorPoint(0,0);
    var rocket3 = new lime.Sprite().setSize(80,140).setFill('img/rocket.png').setPosition(560,420).setAnchorPoint(0,0);

    scene.appendChild(sky);
    scene.appendChild(grass);
    scene.appendChild(platform);
    scene.appendChild(rocket);
    scene.appendChild(rocket2);
    scene.appendChild(rocket3);

    goog.events.listen(rocket,['mousedown', 'touchstart'], function(e){
        var rocket_movement = new lime.animation.MoveTo(350,-50).setDuration(1);
        this.runAction(rocket_movement);
    });

    goog.events.listen(rocket2, ['mousedown', 'touchstart'], function(e){
        var rocket2_movement = new lime.animation.RotateBy(360);
        this.runAction(rocket2_movement);
    });

    goog.events.listen(rocket3, ['mousedown', 'touchstart'], function(e){
        var rocket3_movement = new lime.animation.FadeTo(0).setDuration(2);
        this.runAction(rocket3_movement);

        goog.events.listen(rocket3_movement, lime.animation.Event.STOP, function(e){
            alert('El cohete ha ido');
        });

    });
	// set current scene active
	director.replaceScene(scene);

}


//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('lab2.start', lab2.start);
