//****************Assignment1*****************
var participant1 = prompt('Enter the name of First participant :');
console.log('Name of the first participant is ' + participant1);
var participant2 = prompt('Enter the name of Second participant :');
console.log('Name of the second participant is ' + participant2);

var p1Mass = prompt(' What is the weight of '+ participant1 +' ? ');
console.log(' Weight of the ' + participant1 + ' is ' + p1Mass + ' kg ' );
var p1Height = prompt(' What is the height of ' + participant1 + ' ? ');
console.log(' Height of the ' + participant1 + ' is ' + p1Height + ' m. ' );

var p2Mass = prompt(' What is the weight of '+ participant2 +' ? ');
console.log(' Weight of the ' + participant2 + ' is ' + p2Mass + ' kg ' );
var p2Height = prompt(' What is the height of ' + participant2 + ' ? ');
console.log(' Height of the ' + participant2 + ' is ' + p2Height + ' m. ' );

var p1BMI, p2BMI, higherBMI;
p1BMI = p1Mass/(p1Height*p1Height);
console.log(" BMI (Body Mass Index) of " + participant1 + ' is ' + p1BMI);
alert(" BMI (Body Mass Index) of " + participant1 + " is " + p1BMI);

p2BMI = p2Mass/(p2Height*p2Height);
console.log(" BMI (Body Mass Index) of " + participant2 + ' is ' + p2BMI);
alert(" BMI (Body Mass Index) of " + participant2 + " is " + p2BMI);

higherBMI = p2BMI > p1BMI;
alert(" Is " + participant2 + "'s BMI higher than " + participant1 + " 's BMI ? " + higherBMI);
console.log(" Is " + participant2 + "'s BMI higher than " + participant1 + " 's BMI ? " + higherBMI);