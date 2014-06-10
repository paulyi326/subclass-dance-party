var Dancer2 = function(top, left, timeBetweenSteps){
  debugger;
  Dancer.call(this, top, left, timeBetweenSteps);
  // var blinkyDancer = new Dancer(top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  debugger;
  this.$node = $('<span class="dancer"><img src="http://img2.wikia.nocookie.net/__cb20130505141028/lionking/images/8/83/Simba_Run_Animated2.gif"></span>');
  this.x = $("body").height() * Math.random() * 0.8;
  this.y = $("body").width() * Math.random() * 0.8;
  debugger;
  this.setPosition(this.x, this.y);

};

Dancer2.prototype = Object.create(Dancer.prototype);
Dancer2.prototype.constructor = Dancer2;

Dancer2.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  debugger;

  if (!this.lineup) {
    debugger;
    Dancer.prototype.step.call(this);

    this.left = this.left - 70;
    if (this.left <= 0){
      this.left = $("body").width();
    }
    this.setPosition(this.top, this.left);
    debugger;


    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // this.$node.toggle();
  } else {
    // this.$node.show();
  }
};
