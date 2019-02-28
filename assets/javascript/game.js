



//  var scr_drivetowork = document.getElementById("drivetowork");
//  var Scr_drivearound = document.getElementById("drivearound");
//   var Scr_getTuneUp = document.getElementById("getTuneUp");
//   var Scr_honk = document.getElementById("honk");
//    var Scr_start = document.getElementById("Start");




// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
  Scr_start.textContent = "";
  var userGuess = event.key;

}

var guessArr = [];
function reply_click() {
  whichtheme(event.srcElement.id)

}

function whichtheme(btnid) {
  var diner = ["McDonalds", "Pizza Hut", "Taco Bell", "Olive Garden", "Panda Express"];
  var eightyspop = ["Elton John", "Michael Jackson", "Phil Collins", "Prince", "Billy Joel"];
  var actionHero = ["Super Man", "Spider Man", "Wonder Woman", "Batman", "Captain America"];

  wordToguess = "";

  if (btnid === "btnFood") {
    guessArr = shuffle(diner);

  }
  else
    if (btnid === "btn80pop") {

      guessArr = shuffleArray(eightyspop);

    }
    else {
      guessArr = shuffleArray(actionHero);

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
  guessArr.splice(0, 1);  // removes he first element from array cause we already picked it from the list. 
  //firstcreate the blank word with empty spaces to account for the length
  if (i === 0) {
    guessWordSoFar = game.makeblank();
  }

  // populate html page with blank string

  while (i < 10) {
    var letterGuess = prompt("Pick a letter ", "X");

    game.guessletter = letterGuess;
    var guessWordComp = game.checkguess(wordToguess, guessWordSoFar, letterGuess);
    if (guessWordComp === guessWordsofar) {
      i++;
      //Update html for number of tries  left//    
    } //letter not found number of tries decreased
    else
    { //update html with wordguessed so far}
 
  }

}
  /*************************************** * game object below*********************************************************************/
  var game = {

    //This function creates a blank unpopulated string to account for each letter position and space. 
    //This should be called when starting a new word search /
    makeblank: function () {
      var blankstr;
      for (i = 0; i < wordToguess.length - 1; i++) {
        if (wordToguess[i] !== " ") { blankstr = blankstr & "#" }
        else { blankstr = blankstr & " " }

      }
      return blankstr
    },


    // This function "checkguess" checks the user input letter against the word and returns populated string with succesful guesses
     checkguess: function (fullword, blankstr, checkLetter) {
      var blankstr;
      var indices = [];
      for (var i = 0; i < str.length; i++) {
        if (fullword[i] === checkLetter) blankstr = This.replaceAt(blankstr, i, checkLetter); //indices.push[i];

      }
      return blankstr
    },

    // replace char at postion. This gets called from  checkguess
    replaceAt: function (string, index, replace) {
      return string.substring(0, index) + replace + string.substring(index + 1);
    }
    ,
    max_guesses: 10,
    guess_left: 10,
    lengthofitem: 0,
    guessletter: ""

  }
  /**************************************************game object above************************************** */

 

  // game object has to populate the screen based on the word passed to it. 
  // get the length 

  // set up loop to  listen to key events
  //  User enter a letter,  create function to search word for the letter
  // if successful  populate the  line position with the  letter .  if not successful 
  // prompt the user that the guess was wrong and delete from the total.
  // if guess exceeds 10 . reveal the word.  Prompt user if they want to play again.  


}







