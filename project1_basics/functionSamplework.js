function calculateAge(birthYear)
{
	return 2020-birthYear;
}
//var ageRaja = calculateAge(1995);
//console.log("Raja's age is " + ageRaja +"years");

function yearsUntilRetirement(year, firstName) 
{
	var age = calculateAge(year);
	var yearsToRetire = 65 - age;
	if (yearsToRetire > 0)
	{
		console.log(firstName + " retires in " + yearsToRetire +" years");

	}
	else
	{
		
		console.log(firstName + " is already retired ");
	}
}

var name = prompt(" Please provide your name : ");
var yearOfBirth = prompt(" Please provide your year of birth : ");

yearsUntilRetirement(parseInt(yearOfBirth), name);
