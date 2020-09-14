var scores, roundScore, activePlayer, dice, gamePlaying, lastDice;
init()   ;
	

	//actions to be done whenever the ROLL-Dice button is clicked

	document.querySelector(".btn-roll").addEventListener("click", function()
														 
	   {  if(gamePlaying){
	
			var dice = Math.floor(Math.random() * 6) + 1;     //dice random numbers expression
			var diceDOM = document.querySelector(".dice");
			
		  	diceDOM.style.display = "block";         //presenting the Dice image once button is clicked
			diceDOM.src = "dice-" + dice + ".png";	 //dispaly random number on dice image
	        
		   if(dice === 6 && lastDice === 6)
			   {
				//player loses all the score
				 alert("Sorry 3rd Six can't be rolled :-)");  
				 scores[activePlayer] = 0;
				 document.querySelector("#score-" + activePlayer).textContent = "0";
				 
				 nextPlayer();   
			   }
			else if(dice !== 1)     //adding sum of current scores(obtained until dice =1) to globalscore
			
				{
					roundScore += dice;
					document.querySelector("#current-" + activePlayer).textContent = roundScore;
				}
	
			else     //activating next player once the dice value is 1
				{
					alert("Sorry \'1' is here and it's turn of NextONE");
					nextPlayer();
			
				}
		   		
		   			lastDice = dice;
				}
	});

   //adding sum of current scores(obtained until the hold button is clicked and also dice!=1) to globalscore
  
	document.querySelector(".btn-hold").addEventListener("click", function()
														
		{ if (gamePlaying){
			scores[activePlayer] += roundScore;    //Add current score to global score
	   
	   		//update the score in UI
	   		document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
			
			var input = document.querySelector(".final-score").value;
			var winningscore;
			
			if (input){
				winningscore = input;
			} else
				{
					winningscore = 50;
				}
				
	   		//check if the player wins
	   		if (scores[activePlayer] >= winningscore) 
				
				{
				
				document.querySelector("#name-" + activePlayer).textContent = "Winner!!";
				document.querySelector(".dice").style.display = "none";
				document.querySelector(".player-" + activePlayer + "-panel").classList.add("Winner");
				document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
			    gamePlaying = false;				
				} else {
	   			
	   			nextPlayer();
					
				}
		}
   });

	document.querySelector(".btn-new").addEventListener("click", init);

		function init()
			{
			 scores = [0,0];
    		 roundScore = 0;
			 activePlayer = 0;
			 gamePlaying = true;
				
			 document.querySelector(".dice").style.display = "none";  //Hiding the dice image at starting of the game
	
			// make all the current and global scores zero at starting of game
			document.getElementById("score-0").textContent = "0";
			document.getElementById("score-1").textContent = "0";
			document.getElementById("current-0").textContent = "0";
			document.getElementById("current-1").textContent = "0";
			document.getElementById("name-0").textContent = " Player1";
			document.getElementById("name-1").textContent = " Player2";
			document.querySelector(".player-0-panel").classList.remove("Winner!!"); 
			document.querySelector(".player-1-panel").classList.remove("Winner!!");
			document.querySelector(".player-0-panel").classList.remove("active");
			document.querySelector(".player-1-panel").classList.remove("active");
			document.querySelector(".player-0-panel").classList.add("active"); 
			 
				
			}												 
		 
  function nextPlayer()    //Next Player function

		{			
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		
		roundScore = 0;
		
		document.getElementById("current-0").textContent = "0";
		document.getElementById("current-1").textContent = "0";
			
		//toggle : converts the active/inactive position of player to otherway
			
		document.querySelector(".player-0-panel").classList.toggle("active"); 
		document.querySelector(".player-1-panel").classList.toggle("active");
		document.querySelector(".dice").style.display = "none";
		
		}



















