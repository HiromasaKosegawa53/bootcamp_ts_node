const parseInputText = (input) => {
  const values = input.split(",");
  return values.map(v => Number(v))
}

