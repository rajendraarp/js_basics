var firstName = prompt('Enter the Name of the citizen :' );
var job = prompt('Enter the profession of the Citizen :' );

switch(job)
	{
	case 'teacher':
	console.log(firstName + ' works as a School Teacher ');
	break;
			
	case 'lecturer':
	console.log(firstName + ' works as a College Lecturer ');
	break;
			
	case 'police':
	console.log(firstName + ' works as a Police Officer ');
	break;
			
	case 'businessman':
	console.log(firstName + ' is a Businessman ');
	break;
	
	default:
	console.log(firstName + "'s profession unknown");
	break;
	
	}