# JS Async Patterns April 2018

1.  Review of Promises.
2.  Review of Async Await.

### To Run:

1.  `npm install`
2.  `npm start:dev`

## Examples

```
// Async Await Example

const asyncAwaitExample = async () => {
  try {
    console.log('calling');
    const value1 = await firstAwait();
    console.log(value1);
    const value2 = await secondAwait();
    console.log(value2);
    const value3 = await thirdAwait();
    console.log(value3);
    const promiseVal = await simplePromiseExample(num);
    return [value1, value2, value3, promiseVal];
  } catch (error) {
    console.error('Catch error: ', error);
  }
};

// Simple Promise example

const simplePromiseExample = num =>
  new Promise((res, rej) => {
    if (num !== 5) {
      // eslint prefers you throw an error.
      rej(new Error('Rejected: ! Not equal to 5'));
    }
    setTimeout(() => res(10), 2000);
  });
```
