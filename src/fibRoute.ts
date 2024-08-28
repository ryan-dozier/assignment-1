// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

export default (req: { params: string }, res : { send: (s: string) => void }) => {
  const num = req.params;

  const fibN: number = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
