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