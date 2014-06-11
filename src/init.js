$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random() * .8,
      $("body").width() * Math.random() * .8,
      Math.random() * 500
    );
    dancer.lineup = false;

    window.dancers.push(dancer);

    $('body').append(dancer.$node.addClass(dancerMakerFunctionName));

    $(".dancer").on("mouseover", function(event) {
      $(this).hide();
    });
  });

  $(".alignDancerButton").on("click", function(event){
    for (var i = 0; i < window.dancers.length; i++) {
      var dancer = window.dancers[i];
      if (dancer.constructor === Dancer3) {
        dancer.setPosition(dancer.top, $('body').width() - 200);
      } else {
        dancer.setPosition(dancer.top, 0);
      }
      dancer.lineup = true;
    }
  });

  $(".danceButton").on("click", function(event){
    for (var i = 0; i < window.dancers.length; i++) {
      var dancer = window.dancers[i];
      dancer.lineup = false;
      dancer.step();
    }
  });


});

