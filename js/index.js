$('button').on('click', function() {
  // getting a sample from the array using _underscoreJS.
  var ai = _.sample(['r','p','s']);  
  //Getting the value of the input box and assigning it to a var.
  var choice = $('#playerChoice').val(); 
  // using a switch statement to compare ai choices to user choices.
  switch (true) {
    case choice == "p" && ai == "p":
      $('#result').text("You chose paper and I chose paper: Tie");
      break;
    case choice == "r" && ai == "r":
      $('#result').text("You chose rock and I chose rock: Tie");
      break;
    case choice == "s" && ai == "s":
      $('#result').text("You chose scissors and I chose scissors: Tie");
      break;
    case choice == "p"  && ai == "r":
      $('#result').text("You chose paper and I chose rock: I win :)");
      break;
    case choice == "r" && ai == "s":
      $('#result').text("You chose rock and I chose scissors: You win!!");
      break;
    case choice == "s" && ai == "p":
      $('#result').text("You chose scissor and I chose paper: You win!!");
      break;
    case choice == "p" && ai == "r":
      $('#result').text("You chose paper and I chose rock: You win!!");
      break;
    case choice == "s" && ai == "r":
      $('#result').text("You chose scissor and I chose rock: I win :)");
      break;
    case choice == "p" && ai == "s":
      $('#result').text("You chose paper and I chose scissors: I win :)");
      break;
    case choice == "r" && ai == "p":
      $('#result').text("You chose rock and I chose paper: I win :)");
      break;
      default:
        $('#result').text("Whoa, that's not a rock, paper or scissor.");
  }
});