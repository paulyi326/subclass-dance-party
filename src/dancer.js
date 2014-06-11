// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  debugger;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  // Making parameter available for Dancer methods
  this._timeBetweenSteps = timeBetweenSteps;
  debugger;
  this.step();
  this.top = top;
  this.left = left;

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

  Dancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    debugger;
    setTimeout(this.step.bind(this), this._timeBetweenSteps);
  };

  Dancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i] === this) {
        continue;
      }
      if (this.distance(window.dancers[i]) <= 100) {
        this.$node.hide();
      }
    }
  };

  Dancer.prototype.distance = function(neighbor) {
    var dx = Math.abs(this.left - neighbor.left);
    var dy = Math.abs(this.top - neighbor.top);
    // alert(Math.sqrt(dx*dx + dy*dy));
    return Math.sqrt(dx*dx + dy*dy);
  };
