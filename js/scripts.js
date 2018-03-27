$(function() {

  var vowels = ["a", "e", "i", "o", "u", "y"];
  $("#userInput").submit(function(event) {

    event.preventDefault();
    var userInput = $("#userString").val().trim().toLowerCase();
    var userArray = userInput.split("");
    var userAnswer = userArray.slice();
    for(var i = 0; i < userArray.length; i++) {
      if(userArray[i] === "-") {
        userArray[i] = " ";
        userAnswer[i] = " ";
      }
      for (var j = 0; j < vowels.length; j++) {
        if(userArray[i] === vowels[j]) {
          userArray[i] = "-";
        }
      }
    };
    // Remove form input and show buttons
    $("#stringInput").detach();
    $(".btn-group").show();
    var outputString = userArray.join("");
    var outputAnswer = userAnswer.join("");
    $("#output").append("<h3>Here is your clue, time to guess:</h3><br>" + outputString);

    // Guessing letters
    var guess = "";
    $(".btn-group button").click(function() {
      guess = $(this).val();
      $(this).remove();
      $("#output").empty();
      var count = 0;
      for(var i = 0; i < userArray.length; i++) {
        if(userAnswer[i] === guess) {
          userArray[i] = guess;
          outputString = userArray.join("");
        }
      }
      userArray.forEach(function(cnt) {
        if(cnt === "-") {
          count += 1;
        }
      });
      if(count === 0) {
        $("#output").append("<h1>You've WON!!</h1><br>" + outputString);
      } else {
        $("#output").append("<h3>Here is your updated clue, time to guess:</h3><br>" + outputString);
      }
    });
  });
});
