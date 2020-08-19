var firstName = prompt ("Enter the name of the Applicant : ");
var age = prompt (" Age of the Applicant : ");

switch(true)
{
  case age <= 21:
    console.log("Age of Mr. " + firstName + " is " + age + "yrs");
    console.log(firstName + " is a minor and he is not eligible to get married ");
	break;
		
  case age > 21 && age <= 25 :
	console.log("Age of Mr. " + firstName + " is " + age + "yrs" );
	console.log(firstName + " is still have some time to get married ");
	break;
		
  case age >25 && age <= 35 :
	console.log("Age of Mr. " + firstName + " is " + age + "yrs" );
	console.log(" This is " + firstName + "'s" + " Marriage Time ");
	break;
		
  case age > 40:
    console.log("Age of Mr. " + firstName + " is " + age + "yrs" );
	console.log("Mr." + firstName + " is agebar for Marriage :-( ");
	break;
		
	default:
		console.log(" Age of Mr./Mrs. " + firstName + " is Unknown ");

}