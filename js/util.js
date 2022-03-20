const getRandomNumber = function (from, to) {
  if (from < 0 || to <= from) {
    throw new Error('Неверный параметр!');
  }
  return Math.floor(Math.random() * (Math.floor(to) - Math.ceil(from) + 1) + Math.ceil(from));
};

const isValidLength = function (str, maxLength) {
  return str.length <= maxLength;
};

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const getRandomObjectArray = (count, callback) => Array.from({length: count}, callback);

export {getRandomNumber, isValidLength, getRandomArrayElement, getRandomObjectArray};