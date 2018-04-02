import simplePromiseExample from './promises';

const timeOuts = [2000, 2000, 2000];

const awaitFactory = (message, index) =>
// we return a new promise from a fn
  new Promise(res => setTimeout(() => res(message), timeOuts[index]));

const firstAwait = () => awaitFactory('hello', 0);
const secondAwait = () => awaitFactory('world', 1);
const thirdAwait = () => awaitFactory('Adam', 2);

// use await keyword before functions that return promises
const asyncAwaitExample = async () => {
  console.log('calling');
  const value1 = await firstAwait();
  console.log(value1);
  const value2 = await secondAwait();
  console.log(value2);
  const value3 = await thirdAwait();
  console.log(value3);
  const promiseVal = await simplePromiseExample();
  return [value1, value2, value3, promiseVal];
};

export default asyncAwaitExample;
