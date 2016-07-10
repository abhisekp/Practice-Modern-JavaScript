import memGen from './example/memoized-fib-gen';
import console from 'better-console';
import ordinal from 'ordinal-number-suffix';
import numd from 'numd';
import dedent from 'dedent';
import ora from 'ora';
import FONTS from 'cfonts';

const fonts = new FONTS({
  text: 'Fibonacci Gen',
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

  console.info(String(allFibs[maxNum]).green.inverse);
  console.info(dedent`
    ${ nthTerm.blue.inverse } fibonacci number \
    generated in ${ timeTaken }
  `);
}, 0);
