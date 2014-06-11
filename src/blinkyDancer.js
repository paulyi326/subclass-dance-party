var BlinkyDancer = function(top, left, timeBetweenSteps){
  debugger;
  Dancer.call(this, top, left, timeBetweenSteps);
  // var blinkyDancer = new Dancer(top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  this.$node = $('<div class="dancer"><img src="http://img.izismile.com/img/img5/20121221/1000/some_of_the_best_gifs_of_2012_44.gif"></div>');
  this.setPosition(top, left);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  debugger;
  if (!this.lineup) {
    Dancer.prototype.step.call(this);
    var left = Math.random() * $('body').width() * 0.8;
    var top = Math.random() * $('body').height() * 0.6;
    this.setPosition(top, left);

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  } else {
    this.$node.show();
  }
};




// var BlinkyDancer = function(top, left, timeBetweenSteps){
//   debugger;
//   var blinkyDancer = new Dancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function(){
//     // call the old version of step at the beginning of any call to this new version of step
//     // oldStep.apply(this);
//     // this === blinkydancer
//     // var oldStep = function(){
//     //   // the basic dancer doesn't do anything interesting at all on each step,
//     //   // it just schedules the next step
//     //   // debugger;
//     //   // this === blinkydancer
//     //   setTimeout(this.step.bind(this), this._timeBetweenSteps);
//     // };
//     oldStep.apply(this);
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

  // return blinkyDancer;
// };
