import console from 'better-console';

const fib = function* fib(n) {
  const isInfinite = n === undefined;

  let current = 0;
  let next = 1;

  // eslint-disable-next-line no-param-reassign
  while (Number.isFinite(current) && isInfinite || n--) {
    yield current;
    [current, next] = [next, current + next];
  }
};

const log = () => {
  // eslint-disable-next-line prefer-const
  for (let f of fib()) {
    console.log(f);
  }
};

console.info('==================================================');
log();

