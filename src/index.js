import './style/style.css';
import simplePromiseExample from './promises';
import asyncAwaitExample from './async-await';

simplePromiseExample()
  .then(val => console.log('Value: ', val))
  .catch(err => console.error('Error: ', err.message));

asyncAwaitExample().then(val => console.log('Value Array: ', val));

function foo() {
  const element = document.createElement('h1');
  element.innerHTML = 'Hello Webpack';
  element.classList.add('foo');
  return element;
}

document.body.appendChild(foo());
