var scores, roundScore, activePlayer, gamePlaying;

init()   ;
	

	//actions to be done whenever the ROLL-Dice button is clicked

	document.querySelector(".btn-roll").addEventListener("click", function()
														 
	   {  if(gamePlaying){
	
			var dice1 = Math.floor(Math.random() * 6) + 1;     //dice random numbers expression
			var dice2 = Math.floor(Math.random() * 6) + 1;
			
		  	document.getElementById("dice-1").style.display = "block";         
		    document.getElementById("dice-2").style.display = "block";
		    
			document.getElementById("dice-1").src = "dice-" + dice1 + ".png";
		    document.getElementById("dice-2").src = "dice-" + dice2 + ".png";
	        
		   if(dice1 !== 1 && dice2 !== 1)     //adding sum of current scores(obtained until dice =1) to globalscore
			
				{
					roundScore += dice1 + dice2;
					document.querySelector("#current-" + activePlayer).textContent = roundScore;
				}
	
			else     //activating next player once the dice value is 1
				{
					alert("Sorry \'1' is here and it's turn of NextONE");
					nextPlayer();
			
				}
		   		
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
				document.getElementById("dice-1").style.display = "none";         
		        document.getElementById("dice-2").style.display = "none";
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
				
			 document.getElementById("dice-1").style.display = "none";         
		    document.getElementById("dice-2").style.display = "none";
	
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
		document.getElementById("dice-1").style.display = "none";         
		document.getElementById("dice-2").style.display = "none";
		
		}



















