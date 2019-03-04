
/*************************************** * game object below*********************************************************************/
var game = {
  //unsolved is the unsolved word with character place holder, solved is the actual word
  actionHero: ["Super Man", "Spider Man", "Wonder Woman", "Batman", "Captain America"],
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

  shuffle: function () {
    var i = 0
      , j = 0
      , temp = null
    for (i = this.actionHero.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = this.actionHero[i]
      this.actionHero[i] = this.actionHero[j]
      this.actionHero[j] = temp
    }
  },

  checkguess: function (checkLetter) {

    var indices = [];
    for (var i = 0; i < this.solved.length; i++) {
      if (this.solved[i].toLowerCase() === this.pickedLetter.toLowerCase()) this.unsolved = this.replaceAt(this.unsolved, i, this.solved[i]); //indices.push[i];

    }
    document.getElementById("dispunSolved").innerHTML = this.unsolved;
    return this.unsolved;
  },

  // replace char at postion. This gets called from  checkguess
  replaceAt: function (string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
  }
  ,
  guess_left: 10,
  wins: 0,
  losses: 0,
  myPicks: "",
  getUserGuesses: function (mykey) {

    var guessWordSoFar;
    document.getElementById("dispunSolved").innerHTML = this.unsolved;
    var letterGuess = mykey;
    this.myPicks = this.myPicks + " " + letterGuess;
    document.getElementById("letterGuessed").innerHTML = this.myPicks;
    guessWordSoFar = this.unsolved;
    this.pickedLetter = letterGuess;
    this.checkguess();

    document.getElementById("dispunSolved").innerHTML = this.unsolved;

    if (this.unsolved === this.solved) {
      {
        document.getElementById("letterGuessed").innerHTML = "!!! You Won !!";
        //alert("You solved the Word Search");
        this.wins = this.wins + 1;
         startNewGame= true;
         document.getElementById("theme").innerHTML = "Play Another Game Pick a Letter!!";
      } // game is solved
    }

    if (guessWordSoFar === this.unsolved) {
      this.guess_left = (this.guess_left - 1);
      document.getElementById("gLeft").innerHTML = (this.guess_left);
      if (this.guess_left < 1) {
         console.log("guesses left " + this.guess_left);
            
       
        this.losses = this.losses + 1;
        startNewGame = true;
        document.getElementById("theme").innerHTML = "No More Guesses, Pick a Letter";
      }
    }
    else {

      guessWordSoFar = this.unsolved;
      document.getElementById("dispunSolved").innerHTML = this.unsolved;
    }

  }
  ,
  run: function () {
    if (this.actionHero.length > 1) { this.shuffle(); }
    console.log("actionHero " + this.actionHero.length);
    if (this.actionHero.length === 0) {
      alert("No more words left, Game Over");
      document.location.reload();
    }
    this.myPicks = "";

    this.solved = this.actionHero[0];  // get the first one from the array
    this.actionHero.splice(0, 1); // remove word  from array so it isn't played again. 
    this.unsolved = this.blankstr();
    document.getElementById("dispunSolved").innerHTML = this.unsolved;
    this.guess_left = 10;
    document.getElementById("gLeft").innerHTML = (10);

  },


};

/**************************************************game object above************************************** */
var newSession = true;
var startNewGame = true;
document.onkeyup = function (event) {
  var mykey = event.key;
  if (newSession === true) {
    console.log(mykey);
    newSession = false;
    game.run(); // sets game object properties
    startNewGame= false;
    document.getElementById("theme").innerHTML = "Lets Play!!";
  }
  else {
    if (startNewGame === true) {
      startNewGame = false;
      document.getElementById("theme").innerHTML ="New Game Pick a Letter Guess";
      game.run(); //resets variables in object
      game.getUserGuesses(mykey); // 
    }
    else {
      startNewGame = false;
      document.getElementById("theme").innerHTML ="Pick a Letter Guess";
      game.getUserGuesses(mykey); 
    }

  }


};








/* function reply_click() {
  var guessArr = [];
  btnid = event.srcElement.className;

  setTimeout(whichtheme(btnid), 2000);

  var imageUrl = "" */

/* function whichtheme(btnid) {
  var diner = ["McDonalds", "Pizza Hut", "Taco Bell", "Olive Garden", "Panda Express"];
  var eightyspop = ["Elton John", "Michael Jackson", "Phil Collins", "Prince", "Billy Joel"];
  var actionHero = ["Super Man", "Spider Man", "Wonder Woman", "Batman", "Captain America"];
  var mybody = document.getElementById("mybody");
  wordToguess = "";
*/
/* if (btnid === "btnFood") {
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
*/
/* function shuffle(array) {
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
*/


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
/*
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



      } */

/* var letterGuess = prompt("Pick a letter ", "a");

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

*/


  // game object has to populate the screen based on the word passed to it. 
  // get the length 

  // set up loop to  listen to key events
  //  User enter a letter,  create function to search word for the letter
  // if successful  populate the  line position with the  letter .  if not successful 
  // prompt the user that the guess was wrong and delete from the total.
  // if guess exceeds 10 . reveal the word.  Prompt user if they want to play again.  










