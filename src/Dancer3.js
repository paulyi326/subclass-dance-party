var Dancer3 = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  // var blinkyDancer = new Dancer(top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  this.$node = $('<div class="dancer"><img src="http://img2.wikia.nocookie.net/__cb20130505141028/lionking/images/8/83/Simba_Run_Animated2.gif"></div>');
  this.setPosition(top, left);
};

Dancer3.prototype = Object.create(Dancer.prototype);
Dancer3.prototype.constructor = Dancer3;

Dancer3.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  if (!this.lineup) {
    Dancer.prototype.step.call(this);
    this.left = this.left - 50;
    if (this.left <= 10){
      this.left = $('body').width();
    }
    this.setPosition(this.top, this.left);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // this.$node.toggle();
  } else {
    // this.$node.show();
  }
};
