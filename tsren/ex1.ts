const parseInputText = (input: string): Array<number> => {
  const values =input.split(",");
  return values.map(v => Number(v))
}

