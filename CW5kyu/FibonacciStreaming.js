// You're going to provide a needy programmer a utility method that generates an infinite amount of sequential fibonacci numbers.

// to do this return an Iterator<BigInt> starting with 1

// A fibonacci sequence starts with two 1s. Every element afterwards is the sum of the two previous elements. See:

// 1, 1, 2, 3, 5, 8, 13, ..., 89, 144, 233, 377, ...

// My Solution Is:

function* fibonacciSequence() {
  let previous = 0n;
  let current = 1n;

  while (true) {
    yield current;
    [previous, current] = [current, previous + current];
  }
}

// Example usage:
const fibonacciIterator = fibonacciSequence();
for (let i = 0; i < 10; i++) {
  console.log(fibonacciIterator.next().value);
}

