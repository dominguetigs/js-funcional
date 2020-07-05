Array.prototype.reducer = function (callbackFn, initializer) {
  let [result] = this;
  let arr = this.slice(1);

  if (initializer !== undefined) {
    result = initializer;
    arr = this;
  }

  for (let i = 0; i < arr.length; i += 1) {
    result = callbackFn(result, arr[i]);
  }

  return result;
};

const calculate = (acc, cur) => acc + cur;
const sum = [1, 2, 3].reducer(calculate);

console.log(sum);
