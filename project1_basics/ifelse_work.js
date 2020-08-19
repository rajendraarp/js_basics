var firstName = prompt ("Enter the name of the applicant : ");
var age = prompt (" Age of the applicant : ");

if (age <= 21)
	
{
	console.log("Age of Mr. " + firstName + " is " + age + "yrs");
	console.log(firstName + " is a minor and he is not eligible to get married ");
}
	else if( age > 21 && age <= 25)
	{
		console.log("Age of Mr. " + firstName + " is " + age + "yrs" );
		console.log(firstName + " is still have some time to get married ");
	}
else if(age >25 && age <= 35)
{
	console.log("Age of Mr. " + firstName + " is " + age + "yrs" );
	console.log(" This is " + firstName + "'s" + " Marriage Time ");
}
else if(age > 35 && age <= 40)
{
	console.log("Age of Mr. " + firstName + " is " + age + "yrs" );
	console.log("Mr." + firstName + " is agebar for Marriage :-( ");
}
else 
	{
		console .log("Please check ur Gauge man :-)");
	}