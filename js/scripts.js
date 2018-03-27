$(function() {
  var vowels = ["a", "e", "i", "o", "u", "y"];
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var userInput = $("#userString").val().trim().toLowerCase();
    var userArray = userInput.split("");
    for(var i = 0; i < userArray.length; i++) {
      for (var j = 0; j < vowels.length; j++) {
        if(userArray[i] === vowels[j]) {
          userArray[i] = "-";
        }
      }
    };
    $("#stringInput").detach();
    $(".btn-group").show();
    var ouputString = userArray.join("");
    $("#output").append("<h3>Here is your clue, time to guess:</h3><br>" + ouputString);
  });
});

// grab button
