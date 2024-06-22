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

## project 2