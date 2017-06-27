// @flow

import 'source-map-support/register';
import 'babel-polyfill';
import BD from 'decimal.js';

BD.config({
  precision: 1e9
});

const memo = [BD(0), BD(1)];

const fib = n => {
  if (n < 0) {
    return null;
  }

  if (memo[n] !== undefined) {
    return memo[n].toString();
  }

  let current = memo[memo.length - 2];
  let next = memo[memo.length - 1];

  for (let i = memo.length - 1; i < n; ++i) {
    [current, next] = [next, current.add(next)];
    memo.push(next);
  }

  return memo[n].toString();
};

const gen = function* (n : number = 78) {
  if(!Number.isFinite(n)) {
    return null;
  }

  fib(n);
  yield* memo.slice(0, n + 1);
}

export default gen;
