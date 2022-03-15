const getRandomNumber = function (from, to) {
  if (from < 0 || to <= from) {
    throw new Error('Неверный параметр!');
  }
  return Math.floor(Math.random() * (Math.floor(to) - Math.ceil(from) + 1) + Math.ceil(from));
};
getRandomNumber(5, 30);

const isValidLength = function (str, maxLength) {
  return str.length <= maxLength;
};
isValidLength('Неверный параметр!', 100);
