var Dancer3 = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  // var blinkyDancer = new Dancer(top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


};

Dancer3.prototype = Object.create(Dancer.prototype);
Dancer3.prototype.constructor = Dancer3;

Dancer3.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
