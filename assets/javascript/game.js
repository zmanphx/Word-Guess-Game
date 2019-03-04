
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
        document.getElementById("Wins").innerHTML = " " + this.wins;
        startNewGame = true;
        document.getElementById("theme").innerHTML = "Winner!! -Play Another Game ";
        winnerSound.play();
        setTimeout( this.delay, 3000); // starts new game
     
      } // game is solved
    }

    if (guessWordSoFar === this.unsolved) {
      this.guess_left = (this.guess_left - 1);
      document.getElementById("gLeft").innerHTML = (this.guess_left);
      if (this.guess_left < 1) {
        console.log("guesses left " + this.guess_left);


        this.losses = this.losses + 1;
        document.getElementById("Losses").innerHTML = " "+ this.losses;
        startNewGame = true;
        document.getElementById("theme").innerHTML = "No More Guesses, Play Another Game";
         looseSound.play();
        setTimeout( this.delay, 3000);
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
    this.guess_left = " " +10;
    document.getElementById("gLeft").innerHTML = " " +(10);

  },
  delay: function () {
     console.log("My delay");
    document.getElementById("theme").innerHTML = "Pick a Letter!!";
    this.myPicks = "";
    document.getElementById("letterGuessed").innerHTML = this.myPicks;
    this.game.run();

  }

};

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
};



/**************************************************game object above************************************** */
var newSession = true;
var startNewGame = true;
var introSound;
var looseSound;
var winnerSound;

 
function introGame() {
 
  introSound = new sound("assets/javascript/intro.mp3");
  looseSound = new sound("assets/javascript/laugh.mp3");
  winnerSound = new sound("assets/javascript/winner.mp3");
}

document.onkeyup = function (event) {
  var mykey = event.key;
  if (newSession === true) {
    introGame();
    introSound.play();
    console.log(mykey);
    newSession = false;
    game.run(); // sets game object properties
    startNewGame = false;
    document.getElementById("theme").innerHTML = "Lets Play!!";
  }
  else {
    if (startNewGame === true) {
      startNewGame = false;
    
      game.getUserGuesses(mykey); // 
    }
    else {
      startNewGame = false;
     // document.getElementById("theme").innerHTML = "Pick a Letter Guess";
      game.getUserGuesses(mykey);
    }

  }


};


















