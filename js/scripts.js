$(function() {
  $("#userInput").submit(function(event){
    event.preventDefault();

    var countTo = parseInt($("#countTo").val());
    var countBy = parseInt($("#countBy").val());

    if (countTo <= countBy) {
      alert("Please enter a count by number that is less than the count to number");
    }
    else if (countBy <= 0 || countTo <=0) {
      alert("Please enter a positive count by and count to number")
    }
    else {
      for (var i = countBy; i <= countTo; i += countBy) {
        $("#output").append(", " + i);
      };
    }


  });
});
