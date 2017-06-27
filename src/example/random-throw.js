// @flow

import 'babel-polyfill';
import 'source-map-support/register';
import _ from 'lodash/fp';
import c from 'clor/c';

const min: number = 1;
const max: number = 10;
console.info(
  c`<red><inverse> Random Number between ${min} and ${max} is </inverse></red><green><inverse><bold> ${_.random(min, max)} </bold></inverse></green>`,
);

throw Error(c`<bgBlue><red><bold>Boom blast!</bold></red></bgBlue>`);

console.log('...aha!');
