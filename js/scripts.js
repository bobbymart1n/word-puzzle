$(function() {

  var vowels = ["a", "e", "i", "o", "u", "y"];
  $("#userInput").submit(function(event) {

    event.preventDefault();
    var userInput = $("#userString").val().trim().toLowerCase();
    var userArray = userInput.split("");
    var userAnswer = userArray.slice();
    // userAnswer.forEach(function(letter) {
    //   if(letter === "-") {
    //     letter = " ";
    //   }
    // });
    // console.log(userAnswer);
    // userAnswer.join("");
    // console.log(userAnswer, "HERE");
    for(var i = 0; i < userArray.length; i++) {
      if(userArray[i] === "-") {
        userArray[i] = " ";
        userAnswer[i] = " ";
      }
      // console.log(userArray, "Here");
      // console.log(userAnswer);
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
    console.log(outputString);
    console.log(outputAnswer);
    $("#output").append("<h3>Here is your clue, time to guess:</h3><br>" + outputString + outputAnswer);

    // Guessing letters
    var guess = "";
    $(".btn-group button").click(function() {
      guess = $(this).val();
      console.log(guess);

      if(guess !== "a") {

      }
    });
  });
});
