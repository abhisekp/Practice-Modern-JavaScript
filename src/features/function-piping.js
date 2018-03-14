import { flow, snakeCase, get, toUpper } from 'lodash/fp';

function fnPipe() {
  const obj = {
    name: 'Abhisek Pattnaik',
  };

  const nonPipedResult = toUpper(snakeCase(get('name')(obj)));
  console.log('Non Piped:', nonPipedResult);

  const flowedResult = flow(
    get('name'),
    snakeCase,
    toUpper,
  )(obj);

  console.log('Flowed:', flowedResult);

  // 😁
  const pipedResult = obj
    |> get('name')
    |> snakeCase
    |> toUpper;

  console.log('Piped:', pipedResult);
}

export default fnPipe;
