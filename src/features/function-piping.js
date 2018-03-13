import { curryN } from 'lodash/fp';

function fnPipe() {
  const get = curryN(2, (prop: string, obj: object): any => {
    if (obj !== null && typeof obj === 'object') {
      return obj[prop];
    }

    return undefined;
  });

  const uppercase = (string: string): string => {
    if (typeof string === 'string') {
      return string.toUpperCase();
    }

    return '';
  };

  const snaked = (string: string): string => {
    if (typeof string === 'string') {
      return `_${string.trim()}_`;
    }

    return '_';
  };

  const obj = {
    name: 'Abhisek Pattnaik',
  };

  const nonPipedResult = snaked(uppercase(get('name')(obj)));
  console.log('Non Piped:', nonPipedResult);

  // 😁
  const pipedResult = obj
    |> get('name')
    |> uppercase
    |> snaked;

  console.log('Piped:', pipedResult);
}

export default fnPipe;
