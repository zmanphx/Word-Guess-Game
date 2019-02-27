



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
      
    var guessArr =[];
    var guessWord ="";  


    function reply_click()
      {
        var diner = ["McDonalds","Pizza Hut", "Taco Bell", "Olive Garden", "Panda Express" ];
        var eightyspop = ["Elton John", "Michael Jackson", "Phil Collins", "Prince", "Billy Joel" ];
        var actionHero  = ["Super Man", "Spider Man", "Wonder Woman", "Batman", "Captain America"];
        
        wordToguess="";
       
       
           console.log(event.srcElement.id);
       
        if(event.srcElement.id === "btnFood") {
          guessArr= shuffle(diner);
                  
        }
         else
        if(event.srcElement.id === "btn80pop") {
        
          guessArr= shuffleArray( eightyspop );

          }  
          else
          {
             guessArr= shuffleArray(actionHero );

           }
        
      }
      
        function whichtheme( )
        {
          var diner = ["McDonalds","Pizza Hut", "Taco Bell", "Olive Garden", "Panda Express" ];
          var eightyspop = ["Elton John", "Michael Jackson", "Phil Collins", "Prince", "Billy Joel" ];
          var actionHero  = ["Super Man", "Spider Man", "Wonder Woman", "Batman", "Captain America"];
          
          wordToguess="";
         
         
             console.log(event.srcElement.id);
         
          if(event.srcElement.id === "btnFood") {
            guessArr= shuffle(diner);
                    
          }
           else
          if(event.srcElement.id === "btn80pop") {
          
            guessArr= shuffleArray( eightyspop );
  
            }  
            else
            {
               guessArr= shuffleArray(actionHero );
  
             }
          
        }
        


        }




      function shuffle (array) {
       
       
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
      
         wordToguess= guessArr[0]; 


      // Creating our car object.
      var game = {

        // Properties of our car object.
        // game object has to populate the screen based on the word passed to it. 
        // get the length 

        // set up loop to  listen to key events
        //  User enter a letter,  create function to search word for the letter
          // if successful  populate the  line position with the  letter .  if not successful 
          // prompt the user that the guess was wrong and delete from the total.
           // if guess exceeds 10 . reveal the word.  Prompt user if they want to play again.  

        max_guesses:10,
        guess_left:10,
        lengthofitem: 0,
        currentItem:"A",
        
        
         // currentItem: guessArr[0],
         // lengthofitem: currentItem.length,
        
        
        // Creating the driveToWork method.
        // A method is a function associated with an object.
        driveToWork: function () {

          // When we say "this" (as in this.mileage) we are referring to the object the method is a part of.
          // In this case, we will alert the mileage of the car object.
          alert("Old Mileage: " + this.mileage);

          // Adding 8 to the car's mileage.
          this.mileage = this.mileage + 8;

          // Alerting the car's new mileage.
          alert("New mileage: " + this.mileage);
        },

        // The driveAroundWorld method adds 24,000 miles to our car, sets isWorking to false, and makes some alerts.
        driveAroundWorld: function () {

          alert("Old Mileage: " + this.mileage);

          this.mileage = this.mileage + 24000;

          alert("New Mileage: " + this.mileage);
          alert("Car needs a tuneup!");

          this.isWorking = false;
        },

        // The getTuneUp method sets isWorking to true and alerts a message.
        getTuneUp: function () {
          alert("Car is ready to go!");
          this.isWorking = true;
        },

        // The honk method alerts a honking message.
        honk: function () {
          alert("Honk! Honk!");
        }
      };





      // How would we log...

      // The car's make?
    //  console.log(car.make);

      // The car's model?
    //  console.log(car.model);

      // The car's mileage?
     // console.log(car.mileage);

      // How would we run the car's driveToWork method?
    //  car.driveToWork();

      // How would we run the car's driveAroundWorld method?
    //  car.driveAroundWorld();

      // How would we run the getTuneUp method?
    //  car.getTuneUp();

