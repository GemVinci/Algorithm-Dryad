const fish = (size, direction) => {
  let stack = [];
  for (let i = 0; i < size.length; i++) {
    stack.push(i);
    if (stack.length >= 2) {
      let len = stack.length;
      // 新入栈的鱼
      let current_fish = stack[len - 1];
      // 栈中和新进的栈的鱼进行比较的鱼
      let stack_fish = stack[len - 2];
      // 栈中鱼朝向右，新鱼朝向左
      if (direction[stack_fish] == 1 && direction[current_fish] == 0) {
        if (size[current_fish] > size[stack_fish]) {
          stack.splice(len - 2, 1);
        } else {
          stack.pop();
        }
      }
    }
  }
  console.log(stack, "result");
  return stack.length
};
const fishSize = [4, 3, 2, 1, 5];
const fishDirection = [0, 1, 0, 0, 0];
const res = fish(fishSize, fishDirection);
