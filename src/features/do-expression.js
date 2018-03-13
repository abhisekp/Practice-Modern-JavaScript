const doExpr = (bool) => {
  const result = do {
    if (bool) {
      ("I'm truthy"); // eslint-disable-line no-unused-expressions
    } else {
      ("I'm falsy"); // eslint-disable-line no-unused-expressions
    }
  };

  console.log('Do Expression:', result);
};

export default doExpr;
