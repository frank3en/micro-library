const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// const capitalize = ([first, ...rest], locale = navigator.language) =>
//   first.toLocaleUpperCase(locale) + rest.join("");

// const eslintTest = {};

export default {
  sleep,
};
