import 'source-map-support/register';
import console from 'better-console';
import ordinal from 'ordinal-number-suffix';
import numd from 'numd';
import dedent from 'dedent';
import ora from 'ora';
import CFonts from 'cfonts';
import c from 'clor/c';
import memGen from './example/memoized-fib-gen';

const fonts = CFonts.say('Fibonacci Gen', {
  font: 'block',
  colors: '',
  background: 'black',
  letterSpacing: 1,
  space: true,
  maxLength: 10,
});

const spinner = ora({
  text: 'Generating Fibonacci',
  color: 'green',
});

spinner.start();
setTimeout(() => {
  const time = process.hrtime();
  const maxNum = 65536;
  const allFibs = [...memGen(maxNum)];

  const diff = process.hrtime(time);
  const nsTime = diff[0] * 1e9 + diff[1];
  spinner.stop();
  spinner.clear();

  const nthTerm = ordinal(maxNum);
  const timeTaken = numd(nsTime, 'nanosecond', 'nanoseconds');

  console.info(c`<green><inverse>${allFibs[maxNum]}</inverse></green>`);
  console.info(
    dedent(
      c`
    <blue><inverse>${nthTerm}</inverse></blue> fibonacci number \
    generated in ${timeTaken}
  `,
    ),
  );
}, 0);
