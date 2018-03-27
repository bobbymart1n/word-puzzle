$(function() {
  var vowels = ["a", "e", "i", "o", "u", "y"];
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var userInput = $("#userString").val().trim();
    var userArray = userInput.split("");
    console.log(userArray);
  });
});
// Grab value userInput
// Split userInput
 // loop through that split sentence(array)
 // replace all vowels with "-"
 // join new array
 //
