//set main namespace
goog.provide('lab1');

//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Sprite');

// entrypoint
lab1.start = function(){

    var director = new lime.Director(document.body,1024,768);
    director.setDisplayFPS(false);
    var scene = new lime.Scene();
    
    var rect = new lime.Sprite().setSize(100,100).setPosition(500,500)
        .setFill('#000000');
    
    scene.appendChild(rect);
    
    director.replaceScene(scene);
}

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('lab1.start', lab1.start);
