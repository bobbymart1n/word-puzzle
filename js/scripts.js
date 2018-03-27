$(function() {
  // Set vowels var to array or vowels
  var vowels = ["a", "e", "i", "o", "u", "y"];
  $("#userInput").submit(function(event) {
    event.preventDefault();
    // Grab user input, trim it, and lowercase it
    var userInput = $("#userString").val().trim().toLowerCase();
    // split user input to array
    var userArray = userInput.split("");
    // clone user array
    var userAnswer = userArray.slice();
    // loop through user array to remove user entered "-", take same action on clone (this only works because they are clones)
    var vowelCheck = 0;
    // If the user doesn't enter any vowels send alert
    userArray.forEach(function(check) {
      for (var v = 0; v < vowels.length; v++) {
        if(check === vowels[v]) {
          vowelCheck += 1;
        }
      }
    });
    if (vowelCheck >= 1) {
      for(var i = 0; i < userArray.length; i++) {
        if(userArray[i] === "-") {
          userArray[i] = " ";
          userAnswer[i] = " ";
        }
        // loop through vowels to replace with "-"
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
      // Show clue with dashed string
      $("#output").append("<h3>Here is your clue, time to guess:</h3><br>" + outputString);
    } else {
      $(".vowel-check").show();
      $("#userString").addClass("vowel-err");
    }

    // Set guess as empty string
    var guess = "";
    // On click set guess to value of button
    $(".btn-group button").click(function() {
      guess = $(this).val();
      // Remove clicked button and clear previous output
      $(this).remove();
      $("#output").empty();
      // set counter var
      var winCheck = 0;
      var lossCheck = 0;
      // loop through userArray and compare to guess value
      for(var i = 0; i < userArray.length; i++) {
        if(userAnswer[i] === guess) {
          userArray[i] = guess;
          lossCheck += 1;
          outputString = userArray.join("");
        }
      }
      // loop through userArray to compare count to remainder of dashes
      userArray.forEach(function(cnt) {
        if(cnt === "-") {
          winCheck += 1;
        }
      });
      // Win condition, if no more dashes remaining in outputString
      if(winCheck === 0) {
        $("#output").append("<h1>You've WON!!!</h1><br>" + outputString);
      } else if (lossCheck === 0) {
        $(".btn-group").detach();
        $("#output").append("<h1>You're a loser</h1><br><img src='img/loser.png'><br>" + outputString + "<br><a href='index.html'><button class='btn btn-danger'>Try Again</button></a>");
      } else {
        $("#output").append("<h3>Here is your updated clue, time to guess:</h3><br>" + outputString);
      }
    });
  });
});
