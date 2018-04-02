import simplePromiseExample from './promises';

const timeOuts = [2000, 2000, 2000];
export const num = 5;
// change number to 4 to see simplePromiseExample's
// catch block inside the catch of the asyncAwaitExample catch block

const awaitFactory = (message, index) =>
// we return a new promise from a fn
  new Promise(res => setTimeout(() => res(message), timeOuts[index]));

const firstAwait = () => awaitFactory('hello', 0);
const secondAwait = () => awaitFactory('world', 1);
const thirdAwait = () => awaitFactory('Adam', 2);

// use await keyword before functions that return promises
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

export default asyncAwaitExample;
