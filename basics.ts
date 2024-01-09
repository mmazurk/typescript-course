function add(
  n1: number,
  n2: number,
  showResult: boolean,
  resultPhrase: string
) {
  if (showResult) {
    const result = n1 + n2;
    console.log(resultPhrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "The result is ...";

const result = add(number1, number2, printResult, resultPhrase);
console.log(result);