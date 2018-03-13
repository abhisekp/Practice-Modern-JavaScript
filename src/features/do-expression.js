const doExpr = (bool) => {
  const result = do {
    if (bool) {
      "I'm truthy"
    } else {
      "I'm falsy"
    }
  }

  console.log('Do Expression:', result);
}

export default doExpr
