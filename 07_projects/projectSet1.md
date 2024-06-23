# Project related to DOM
## Project link

[Hitesh Sir Project link](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1 {Color scheme switcher}

``` javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  // console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;

      case 'white':
        body.style.backgroundColor = 'white';
        break;

      case 'blue':
        body.style.backgroundColor = 'blue';
        break;

      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;

      case 'purple':
        body.style.backgroundColor = 'purple';
        break;
    }
  });
});

```

## Project 2 {BMI Calculator}

``` javascript
console.log("satyajit")

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // to get the value of the selected id using querySelector we use ".value"
  // we get the value in the form of string in querySelector and to convert into the int we parseInt.

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please provide the correct height';
  }else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please provide the correct weight';
  }else{
    const bmi = ( weight / (( height*height )/ 10000 )).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>` 
  }
  // innerHTML is used to print 
});

```

## Project 3 {Digital Clock}

``` javascript 

const clock = document.getElementById('clock') ;
// const clock = document.querySelector('#clock') ; we can take any both works same

// it is use to set the interval of updation mentioned in ms
setInterval( function(){
  let date = new Date();
  clock.textContent = date.toLocaleTimeString();

  // these also works the same and can be used in the place
  // clock.innerHTML = date.toLocaleTimeString();
  // clock.innerText = date.toLocaleTimeString();
} , 1000) // 1000ms is the updation time of the setInterval method i.e: 1sec

```

## Project 4 {Guess a Number}

```javascript
// console.log( Math.floor(( Math.random() * 100) + 1));
// both have the same task and can be used alternatively
let randomNumber = console.log(parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

// it is an array storing the guesses of the user so that user dont guess same value agian and again and we stop the guessing as numGuess reach 10
let prevGuess = [];
let numGuess = 1;
let playGame = true;

// if you are eligible to play game then you will enter number and then click submit which will take the value to the server to prevent it we use preventdefault property
// and then we take the value from the user by userinput
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateInput(guess);
  });
}

function validateInput(guess) {
  // validate if the value is in between 1-100 or not
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert('Please enter the valid number');
  } else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game over, Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // check the number is equal or not equal to the random number
  if (guess === randomNumber) {
    displayMessage(`Hooray! "You won"`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Your guess is very low!`);
  } else if (guess > randomNumber) {
    displayMessage(`Your guess is very high`);
  }
}

function displayGuess(guess) {
  // clears the guess and update the guesses remaining and previous guesses
  // after the value is updated we need to cleanup the value for the next time
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `; // show number of guesses
  numGuess++; // update the value
  remaining.innerHTML = `${11 - numGuess}`;
  // we wan to print the number of the guesses reamining
}

function displayMessage(message) {
  // it just prints the message
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  // we empty the values of userInput then we disabled the input and for all we need a button that would do all the job and then for the output msg we use innerHTML and then append all this in the resultParse class and mark playGame as false so that our firstloop 'if' doesn't run which inturn result in the suspension of all the function
  // jab sare iteration complete ho jaaye to eventListner ki madad se restart karo project
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="restartButton">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const restartButton = document.querySelector('#restartButton');
  restartButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```