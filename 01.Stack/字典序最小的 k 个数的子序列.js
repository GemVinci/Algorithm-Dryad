var findSmallSeq = function(T, k) {
  let stack = [];
  let result = [];
  for (let i = 0; i < temperatures.length; i++) {
    console.log(stack, i, "==", temperatures.length - i + stack.length);
    while (
      stack.length &&
      T[stack[stack.length - 1]] > T[i] &&
      temperatures.length - i + stack.length > k
    ) {
      stack.pop();
    }
    stack.push(i);
  }
  for (let i = 0; i < stack.length; i++) {
    result.push(T[stack[i]]);
  }
  console.log(stack, "stack");
  return result;
};

let temperatures = [9, 2, 4, 5, 1, 2, 3, 0]; // len 8
let k = 3;
let res = findSmallSeq(temperatures, k);
