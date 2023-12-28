'use strict';

console.log('Hello out there!');

let userName = prompt('Who are we chatting with today?');

alert(`Welcome along ${userName}! Great to have you! Up for a game? Please awnser yes/no, OR y/n.`);

let questionOneguess = prompt('Do I live in Washington State?').toLowerCase();

if(questionOneguess === 'y' || questionOneguess ==='yes'){ alert('Correct!');
} else if(questionOneguess === 'n' || questionOneguess === 'no'){
  alert('Bummer, I do live in WA.');
}

let questionTwoguess = prompt('Do I have kiddos?').toLowerCase();

if(questionTwoguess === 'y' || questionTwoguess === 'yes'){
  alert('I indeed have 4 kiddos!');
} else if(questionTwoguess === 'n' || questionTwoguess ==='no'){
  alert('Actually, we have 4 kiddos!');
}

let questionThreeguess = prompt('Do I have any animals?').toLowerCase();

if(questionThreeguess === 'y' || questionThreeguess === 'yes') {
  alert('Nicely done! We have 10 animals!');
} else if(questionThreeguess === 'n' || questionThreeguess === 'no') {
  alert('We Love animals! We have 7 cats and 3 dogs! We\'d have a farm if we could afford it!');
}

let questionFourguess = prompt('Is this my first career?').toLowerCase();

if(questionFourguess === 'y' || questionFourguess === 'yes') {
  alert('Actually no. I\'ve worked in both childcare and the healthcare settings!');
} else if(questionFourguess === 'n' || questionFourguess === 'no') {
  alert('You\'re correct! I\'ve worked in both the childcare and healthcare settings!');
}

let questionFiveguess = prompt('Am I excited about this new journey?').toLowerCase();

if(questionFiveguess === 'y' || questionFiveguess === 'yes') {
  alert('Absolutley!!');
} else if(questionFiveguess === 'n' || questionFiveguess === 'no') {
  alert('I am a little nervous, but I am Very excited!');
}