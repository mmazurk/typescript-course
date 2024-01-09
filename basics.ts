function addUp(
  n1: number,
  n2: number,
  showResult: boolean,
  resultPhrase: string
): any {
  if (showResult) {
    const result = n1 + n2;
    console.log(resultPhrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 2.8;
let printThis = true;
const resultPhrase = "The result is ...";

const result = addUp(number1, number2, printThis, resultPhrase);
console.log(result);
