function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12)); // returns undefined

let combinedValues: (a: number, b: number) => number; // function type
combinedValues = add;

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  // function type as callback
  const result = n1 + n2;
  cb(result);
}

addAndHandle(999, 0.5, (num) => console.log("The answer is", num));
