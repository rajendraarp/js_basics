var john = {                         // john object defined 
	
	fullName : " John wright ",
	billAmounts : [124, 48, 268, 180, 42],
	tips : [],
	finalbills : [],
	calcTip : function()       // john's tip calculator function
	{
		var percent;
		for (var i = 0; i < this.billAmounts.length; i++)
		{
			
		if (this.billAmounts[i] < 50)
			{
			percent = 0.2;
				
			// calculation of tip if bill < 50
			this.tips[i] = this.billAmounts[i]*percent; 
			
			// calculation of finalbill if bill < 50	
			this.finalbills[i] = this.billAmounts[i] + this.tips[i]; 
			}
			else if (this.billAmounts[i] >= 50 && this.billAmounts[i] <=200)
			{
				
			percent = 0.15;				
			// calculation of tip if bill >= 50 and bill<=200
			this.tips[i] = this.billAmounts[i]*percent; 
				
			// calculation of finalbill if bill >= 50 and bill<=200
			this.finalbills[i] = this.billAmounts[i] + this.tips[i];
				
			}
			
			else (this.billAmounts[i] > 200)
			{
			percent = 0.10;
			//calculation of tip if bill > 200				
			this.tips[i] = this.billAmounts[i]*percent;
			
			// calculation of finalbill if bill>200
			this.finalbills[i] = this.billAmounts[i] + this.tips[i];
						
			}
		} 
		                
	} 
};

john.calcTip();

var mark = {                    //mark object defined
	
	fullName : " Mark Gregger ",
	billAmounts : [77, 375, 110, 42],
	tips : [],
	finalbills : [],
	filmspendings : 200,
	
	calcTip : function()       // mark's tip calculator function
	{
		var percent;
		for (var i = 0; i < this.billAmounts.length; i++)
			
			{
				if (this.billAmounts[i] < 100)
					{
						percent = 0.2;
						// calculation of tip if bill < 100
						this.tips[i] = this.billAmounts[i]*percent;
						
						// calculation of finalbill if bill < 100
						this.finalbills[i] = this.billAmounts[i] + this.tips[i];
					}
				else if (this.billAmounts[i] >= 100 && this.billAmounts[i] <= 300)
					{
						percent = 0.15;
						// calculation of tip if bill >= 100 && bill <=300
						this.tips[i] = this.billAmounts[i]*percent;
						
						// calculation of finalbill if bill >= 100 && bill <=300
						this.finalbills[i] = this.billAmounts[i] + this.tips[i];
						
					}
				else (this.billAmounts[i] > 300)	
					{
						percent = 0.10;
						// calculation of tip if bill >300
						this.tips[i] = this.billAmounts[i]*percent;
						
						// calculation of finalbill if bill >300
						this.finalbills[i] = this.billAmounts[i] + this.tips[i];
						
					}
			} 
		                
	}
	
	
};

function totalNightSpend(tips, bills)
{
	return mark.filmspendings + totalfoodbill(tips, bills);	
}

mark.calcTip();
console.log(totalNightSpend(mark.tips, mark.billAmounts));

function calcavgtip(tips)  //function created for calculating average tips
{
	
	var tiptotal = 0;
	for (i=0; i < tips.length; i++)
	{
			
		 tiptotal = tiptotal + tips[i];
	} 
	   
	    return tiptotal/tips.length;
		
}  

function totalfoodbill(tips, bills)
{
	return calculateTotal(tips) + calculateTotal(bills); 
}

function calculateTotal(arr)
{
	var arrTotal = 0;
	for (i = 0; i < arr.length; i++)
	{ 
	  arrTotal = arrTotal + arr[i];
	}
	return arrTotal;
}


john.avgTip = calcavgtip(john.tips); //avgtip function called john's object
mark.avgTip = calcavgtip(mark.tips);  //avgtip function called mark's object



     if (john.avgTip > mark.avgTip)
	   
	  {
		console.log(john.fullName+ "'s average Tip is the higher than " + mark.fullName+"\'s Average Tip");
		
	  } 

     else 
		
	 {
	   console.log(mark.fullName+ "'s average Tip is the higher than " + john.fullName+"\'s Average Tip");
		
	 }

   console.log(john, mark);