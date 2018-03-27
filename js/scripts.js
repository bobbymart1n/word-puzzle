$(function() {

  var vowels = ["a", "e", "i", "o", "u", "y"];
  $("#userInput").submit(function(event) {

    event.preventDefault();
    var userInput = $("#userString").val().trim().toLowerCase();
    var userArray = userInput.split("");
    for(var i = 0; i < userArray.length; i++) {
      if(userArray[i] === "-") {
        userArray[i] = " ";
      }
      console.log(userArray);
      for (var j = 0; j < vowels.length; j++) {
        if(userArray[i] === vowels[j]) {
          userArray[i] = "-";
        }
      }
    };
    // Remove form input and show buttons
    $("#stringInput").detach();
    $(".btn-group").show();
    var ouputString = userArray.join("");
    $("#output").append("<h3>Here is your clue, time to guess:</h3><br>" + ouputString);

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
