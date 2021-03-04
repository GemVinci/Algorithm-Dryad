var findRightSmall = function(T) {
  let stack = [];
  let result = [];
  for (let i = 0; i < T.length; i++) {
    result[i] = -1;
    while (stack.length > 0 && T[stack[stack.length - 1]] > T[i]) {
      let peek = stack.pop();
      result[peek] = i;
    }
    stack.push(i);
  }
  return result;
};
// 一个数总是想与左边比它大的数进行匹配，匹配到了之后，小的数会消除掉大的数。
let temperatures = [1, 2, 4, 9, 4, 0, 5];
let res = findRightSmall(temperatures);
