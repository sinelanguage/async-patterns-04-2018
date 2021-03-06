// const num = 5;
// change number to 4 to see the promise rejected in the console
// change it to 5 to see the promise resolved and the value fullfilled

// To consume the Promise - meaning we want to process the Promises value once fulfilled -
// we attach a handler to the Promise using it's .then() method. This method takes a
// function that will be passed the resolved value of the Promise once it is fulfilled.

const simplePromiseExample = num =>
  new Promise((res, rej) => {
    if (num !== 5) {
      // eslint prefers you throw an error.
      rej(new Error('Rejected: ! Not equal to 5'));
    }
    setTimeout(() => res(10), 2000);
  });

export default simplePromiseExample;
