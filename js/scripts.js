$(document).ready(function() {
  $("#animals").submit(function(event) {
    // $("#ladybug").toggle();
    // $("#snake").toggle();
    // $("#turtle").toggle();

    // $("#tutle").hide();

    var animals = $("#choice").val();

    if (animals === "Ladybug") {
      $("#ladybug").show();
      $("#snake").hide();
      $("#turtle").hide();
      // console.show("HEY THERE");

    } else if (animals === "Snakes") {
      $("#ladybug").hide();
      $("#snake").show();
      $("#turtle").hide();
    }
    else if (animals === "Turtles") {
      $("#ladybug").hide();
      $("#snake").hide();
      $("#turtle").show();
    }

    event.preventDefault();
// debugger;
  });
});
