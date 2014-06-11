var Dancer2 = function(top, left, timeBetweenSteps){
  debugger;
  Dancer.call(this, top, left, timeBetweenSteps);
  // var blinkyDancer = new Dancer(top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  debugger;
  this.$node = $('<div class="dancer"><img src="http://rs877.pbsrc.com/albums/ab333/jericlean/7.gif~c200"></div>');
  debugger;
  this.setPosition(top, left);

};

Dancer2.prototype = Object.create(Dancer.prototype);
Dancer2.prototype.constructor = Dancer2;

Dancer2.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  debugger;

  if (!this.lineup) {
    debugger;
    Dancer.prototype.step.call(this);

    this.left = this.left + 50;
    this.top = this.top + 20
    if (this.left >= $('body').width() - 300){
      this.left = 0;
    }
    if (this.top >= $('body').height() - 200) {
      this.top = 0;
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
