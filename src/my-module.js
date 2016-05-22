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

  console.info(String(allFibs[maxNum]).green.inverse);
  console.info(dedent`
    ${ ordinal(maxNum).blue.inverse } fibonacci number \
    generated in ${ numd(nsTime, 'nanosecond', 'nanoseconds') }
  `);
}, 0);
