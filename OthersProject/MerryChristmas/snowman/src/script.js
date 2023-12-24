/*  Experimenting with Interact.js.  

"JavaScript drag and  drop, resizing and multi-touch gestures with inertia and snapping for modern browsers (and also IE8+)"

SOURCE:  http://interactjs.io/


Click and drag for mouse events and
drag with your fingers.

*/


// BEGIN INTERACT.JS - target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: false,

   

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
    SantaLaughing.play();
    }
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }


/*
HTML5 Audio Santa Magic


Made some use of the Buzz Audio Library.
http://buzz.jaysalvat.com/documentation/sound/  

MP3s are pretty safe to use when you are targeting HTML5 Audio.  Non supported browsers just don't hear nuttin.  Read the Buzz Docs.  Super easy to use.

Music available for Licensing at AudioJungle.com.  It's cheap!  I love them for all my projects.

Here's da' link:

Music Title ----  "Christmas Magic" 
Direct Link ----

http://audiojungle.net/item/christmas-story/135330?WT.oss_phrase=&WT.oss_rank=27&WT.z_author=kristijanf&WT.trending=trending&WT.ac=search_thumb?ref=marksno


*/

 
 
buzz.defaults.formats = [ 'mp3' ];
buzz.defaults.preload = 'metadata';


var Christmas = new buzz.sound("https://s3-us-west-2.amazonaws.com/s.cdpn.io/191814/Christmas_Sleighride_Audio_Jungle", {
    formats: [ "mp3" ],
    preload: true,
    autoplay: false,
	volume: 100,
    loop: true
});
var hohoho = new buzz.sound("https://s3-us-west-2.amazonaws.com/s.cdpn.io/191814/hohoho", {
    formats: [ "mp3" ],
    preload: true,
    autoplay: false,
	volume: 100,
    loop: false
});

var SantaLaughing = new buzz.sound("https://s3-us-west-2.amazonaws.com/s.cdpn.io/191814/SantaLaughing", {
    formats: [ "mp3" ],
    preload: true,
    autoplay: false,
	volume: 100,
    loop: false
});



var MerryChristmas = new buzz.sound("https://s3-us-west-2.amazonaws.com/s.cdpn.io/191814/SantaMerryChristmas", {
    formats: [ "mp3" ],
    preload: true,
    autoplay: false,
	volume: 100,
    loop: false
});
var Jingle2 = new buzz.sound("https://s3-us-west-2.amazonaws.com/s.cdpn.io/191814/Jinglebells2", {
    formats: [ "mp3" ],
    preload: true,
    autoplay: false,
	volume: 100,
    loop: false
});
	
		
/***************************
Santa Magic Sound Effects
****************************/		

	
	Christmas.play();Jingle2.play();hohoho.play();		
	setTimeout(function () {
    Jingle2.play();MerryChristmas.play();}, 8000
);
setTimeout(function () {
    SantaLaughing.play();}, 20000
);

	
$('#ChristmasTree').hover(function() {
				MerryChristmas.play();Jingle2.play();
 
			}, function() {
				hohoho.stop();Jingle2.stop();
				MerryChristmas.stop();
			});	
$('#ChristmasTree').click(function() {
     SantaLaughing.play();
     MerryChristmas.stop();Jingle2.stop();
			});		
	
	
/***************************
Grouping the sounds so I can toggle them off and on all at once 
****************************/		


var soundEffects = new buzz.group([ 
    hohoho, 
	Christmas,
	Jingle2,
    MerryChristmas, 
	SantaLaughing

]);		
			
	
/***************************
Toggle Mute for all sounds using the sounds grouped.
****************************/

$('.toggle-sound').click(function() {
soundEffects.toggleMute();
$('h2').toggleText("♫ ON", "♫ OFF");
 });			
	
/***************************
A simple jQuery way to swap out text.  More elegant ways to achieve this. But this was expedient.
****************************/			
	
	
jQuery.fn.extend({
    toggleText: function (a, b){
        var that = this;
            if (that.text() != a && that.text() != b){
                that.text(a);
            }
            else
            if (that.text() == a){
                that.text(b);
            }
            else
            if (that.text() == b){
                that.text(a);
            }
        return this;
    }
});