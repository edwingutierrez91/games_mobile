//set main namespace
goog.provide('lab2');


//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');


// entrypoint
lab2.start = function(){

	var director = new lime.Director(document.body,1024,768),
	    scene = new lime.Scene();

	// set current scene active
	director.replaceScene(scene);

}


//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('lab2.start', lab2.start);
