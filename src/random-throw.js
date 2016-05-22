// @flow

import _ from 'lodash';

const min : number = 1;
const max : number = 10;
console.info(`Random Number between ${min} and ${max} is`.red.inverse, String(_.random(min, max)).green.inverse);

throw Error('Boom blast!');

console.log('...aha!');

