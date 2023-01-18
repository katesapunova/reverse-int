module.exports = function reverse (n) {
  let str = Math.abs(n) + '';
 str = str.split("").reverse().join("");
  return +str;
}
