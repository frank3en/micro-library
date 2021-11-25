const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const capitalize = ([first, ...rest], locale = navigator.language) =>
  first.toLocaleUpperCase(locale) + rest.join("");

module.exports = {
  sleep,
  capitalize,
};

// const eslintTest = {};

// export default {
//   sleep,
// };

// function sum(a, b) {
//   return a + b;
// }
// module.exports = sum;
