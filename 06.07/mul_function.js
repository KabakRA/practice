const _mul = (x, y, z) => x * y * z;
function curry(fn) {
  const N = fn.length;
  function innerFn(n, args) {
    return function actualInnerFn(a) {
      if(n <= 1) {
        return fn(...args, a);
      }
     return innerFn(n - 1, [...args, a]);
    }
  }
  return innerFn(N, [])
}
const mul = curry(_mul);
console.log(mul(2)(3)(4)); 
console.log(mul(4)(3)(4)); 
