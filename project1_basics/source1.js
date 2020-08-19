
//Example for variables, datatypes, types of operators

var firstName, lastName, now, DOB, age;
firstName = 'Rajendra';
lastName = 'Allada';
now = 2020;
DOB = 1984;
age = now - DOB;
console.log(firstName + ' ' + lastName + ' is ' + age + ' years old');
console.log(typeof age);
console.log(typeof firstName);
console.log(typeof lastName);
var nonseniorCitizen = age < 60;
console.log(firstName + " " + lastName + ' is not a senior citizen');

//Example of 'alert' attribute
var DOB1 = 1954;
age = now - DOB1;
var seniorCitizen = age > 60;
alert(firstName + " " + lastName + ' is a senior citizen');

//variable mutation
DOB1 = 1984;
age = now - DOB1;
alert(firstName + " " + lastName +" 's " + ' age is ' + age + 'years');

//Example of 'prompt' attribute
DOB1 = 1998;
age = now - DOB1;
var newJoinee = prompt('When is name of Fresher ?');
console.log('Name of the new joinee is ' + newJoinee );
var passoutYear = prompt('When is his passout year of B.tech ?');
console.log(newJoinee + ' of age '+ ' ' + age + ' years' + ' passed out his B.tech in ' + passoutYear);