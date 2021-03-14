module.exports = function reverse (n) {
    if(n < 0)
    {
        n = Math.abs(n);
    }
  let string = String(n);
  let result = string.split("").reverse().join("");

  return +result;
}
