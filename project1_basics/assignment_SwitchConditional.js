var playerTeam1 = prompt(" Enter the name of Team1 player : ");
var playerTeam2 = prompt(" Enter the name of Team2 player : ");
var playerTeam3 = prompt(" Enter the name of Team3 player : ");

var score1Team1, score2Team1, score3Team1, avgscoreTeam1;
score1Team1 = parseInt(prompt(" Team1's Score in 1st game : "));
score2Team1 = parseInt(prompt(" Team1's Score in 2nd game : "));
score3Team1 = parseInt(prompt(" Team1's Score in 3rd game : "));
avgscoreTeam1 = (score1Team1+score2Team1+score3Team1)/3;
console.log("Average score of the " + playerTeam1 + " 's Team, Team1 is : " + avgscoreTeam1);

var score1Team2, score2Team2, score3Team2, avgscoreTeam2;
score1Team2 = parseInt(prompt(" Team2's Score in 1st game : "));
score2Team2 = parseInt(prompt(" Team2's Score in 2nd game : "));
score3Team2 = parseInt(prompt(" Team2's Score in 3rd game : "));
avgscoreTeam2 = (score1Team2+score2Team2+score3Team2)/3;
console.log("Average score of the " + playerTeam2 + " 's Team, Team2 is : " + avgscoreTeam2);

var score1Team3, score2Team3, score3Team3, avgscoreTeam3;
score1Team3 = parseInt(prompt(" Team3's Score in 1st game : "));
score2Team3 = parseInt(prompt(" Team3's Score in 2nd game : "));
score3Team3 = parseInt(prompt(" Team3's Score in 3rd game : "));
avgscoreTeam3 = (score1Team3+score2Team3+score3Team3)/3;
console.log("Average score of the " + playerTeam3 + " 's Team, Team3 is : " + avgscoreTeam3);


// switch example with boolean 
switch(true)
	{
	case avgscoreTeam1 > avgscoreTeam2 && avgscoreTeam1 > avgscoreTeam3:
		console.log(playerTeam1 + " is the winner of the Basketball Champion League with highest average score of " + avgscoreTeam1 + " points from all the matches ");
		break;
	
    case avgscoreTeam2 > avgscoreTeam1 && avgscoreTeam2 > avgscoreTeam3:
		console.log(playerTeam2 + " is the winner of the Basketball Champion League with highest average score of " + avgscoreTeam2 + " points from all the matches ");
	    break; 

	case avgscoreTeam3 > avgscoreTeam1 && avgscoreTeam3 > avgscoreTeam2:
		console.log(playerTeam3 + " is the winner of the Basketball Champion League with highest average score of " + avgscoreTeam3 + " points from all the matches ");
	    break;
    
	default:	
		console.log("The Basketball Champion League has been declared Draw due to same Average scores :-) ");
	
	}

/* switch exAMPLE WITH VARIABLE 
var day = 'Sunday';

switch(day % 2 == 0)
	{
	case 'Sunday':
		console.log(playerTeam1 + " is the winner of the Basketball Champion League with highest average score of " + avgscoreTeam1 + " points from all the matches ");
			return 'non-veg';
		break;
	
    case 'Monday':
		console.log(playerTeam2 + " is the winner of the Basketball Champion League with highest average score of " + avgscoreTeam2 + " points from all the matches ");
			return 'on-diet';
	    break; 

	case avgscoreTeam3 > avgscoreTeam1 && avgscoreTeam3 > avgscoreTeam2:
		console.log(playerTeam3 + " is the winner of the Basketball Champion League with highest average score of " + avgscoreTeam3 + " points from all the matches ");
	    break;
    
	default:	
		console.log("The Basketball Champion League has been declared Draw due to same Average scores :-) ");
	
	}
*/