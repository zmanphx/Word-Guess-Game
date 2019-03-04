






/*************************************** * game object below*********************************************************************/
var game = {
  //unsolved is the unsolved word with character place holder, solved is the actual word
  unsolved: "",
  solved: "",
  pickedLetter: "",
  //This function creates a blank unpopulated string to account for each letter position and space. 
  //This should be called when starting a new word search /
  blankstr: function () {
    var result = "";
    for (i = 0; i < this.solved.length; i++) {
      if (this.solved[i] !== " ") { result = result + "_"; }
      else { result = result + " "; }

    }
    this.unsolved = result;
    return result;
  },

  // This function "checkguess" checks the user input letter against the word and returns populated string with succesful guesses
  checkguess: function (checkLetter) {

    var indices = [];
    for (var i = 0; i < this.solved.length; i++) {
      if (this.solved[i].toLowerCase() === this.pickedLetter.toLowerCase()) this.unsolved = this.replaceAt(this.unsolved, i, this.solved[i]); //indices.push[i];

    }
    return this.unsolved;
  },

  // replace char at postion. This gets called from  checkguess
  replaceAt: function (string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
  }
  ,
  max_guesses: 10,
  guess_left: 10,
  lengthofitem: 0,


};

/**************************************************game object above************************************** */







function reply_click() {
  var guessArr = [];
  btnid = event.srcElement.className;

  setTimeout(whichtheme(btnid), 2000);

  var imageUrl = ""

  function whichtheme(btnid) {
    var diner = ["McDonalds", "Pizza Hut", "Taco Bell", "Olive Garden", "Panda Express"];
    var eightyspop = ["Elton John", "Michael Jackson", "Phil Collins", "Prince", "Billy Joel"];
    var actionHero = ["Super Man", "Spider Man", "Wonder Woman", "Batman", "Captain America"];
    var mybody = document.getElementById("mybody");
    wordToguess = "";

    if (btnid === "btnFood") {
      guessArr = shuffle(diner);
      document.getElementById("theme").innerHTML = "Lunch- Dinner Place";

      //document.body.style.backgroundImage = "url('../images/foodwall.jpg')";

    }
    else
      if (btnid === "btn80pop") {

        guessArr = shuffle(eightyspop);
        document.getElementById("theme").innerHTML = "80's Music Artist";
        // document.body.style.backgroundImage= "url('../images/wallpaper_edwar_80s1.gif' )";
      }
      else {
        guessArr = shuffle(actionHero);
        document.getElementById("theme").innerHTML = "Action Heroes";
        // document.body.style.backgroundImage = "url('../images/superheroe.jpg' )";
      }
  }

  function shuffle(array) {
    var i = 0
      , j = 0
      , temp = null

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array;
  }



  //Check which button was pressed.
  // Change background screen image
  // load array to the game object
  // create loop with prompt count up to 5 max "Do you want to play again ?"
  // if user wants to play the same theme 

  // pass array to game object

  // jquery to capture which key was pressed/
  //$(function(){
  //  $(document).on('keypress', function(e){
  //      console.log(e.which);
  // });
  //  });
  //

  var guessWordSoFar = "";

  for (i = 0; i < 5; i++) {   // Master outerloop

    wordToguess = guessArr[0];  // get the first one from the array
    game.solved = wordToguess;
    guessArr.splice(0, 1);  // removes he first element from array cause we already picked it from the list. 
    //firstcreate the blank word with empty spaces to account for the length
    if (i === 0) {
      guessWordSoFar = game.blankstr();
      document.getElementById("dispunSolved").innerHTML = guessWordSoFar;

    }

    // populate html page with blank string
    var myPicks = " ";
    i = 0;
    while (i < 10) {

      document.getElementById("gLeft").innerHTML = (10 - i);

      document.getElementById("dispunSolved").innerHTML = guessWordSoFar;

      if (guessWordSoFar === game.solved) {
        {
          alert("You solved the Word Search");
          break;


        } // game is solved



      }

      var letterGuess = prompt("Pick a letter ", "a");

      if (i === 0) {
        myPicks = myPicks + " " + letterGuess;
      }
      else { myPicks = myPicks + ",  " + letterGuess; }

      document.getElementById("letterGuessed").innerHTML = myPicks;

      guessWordSoFar = game.unsolved;

      game.pickedLetter = letterGuess;

      game.checkguess();

      if (guessWordSoFar === game.unsolved) {
        i++;
        //Update html for number of tries  left  unsolved didn't change//    
      } //letter not found number of tries decreased prompt " Letter not found, list the letters guessed created a li append"
      else {

        guessWordSoFar = game.unsolved;
        document.getElementById("dispunSolved").innerHTML = guessWordSoFar;
      }



    }

  }


};




  // game object has to populate the screen based on the word passed to it. 
  // get the length 

  // set up loop to  listen to key events
  //  User enter a letter,  create function to search word for the letter
  // if successful  populate the  line position with the  letter .  if not successful 
  // prompt the user that the guess was wrong and delete from the total.
  // if guess exceeds 10 . reveal the word.  Prompt user if they want to play again.  










