const getRandomNumber = function (from, to) {
  if (from < 0 || to <= from) {
    throw new Error('Неверный параметр!');
  }
  return Math.floor(Math.random() * (Math.floor(to) - Math.ceil(from) + 1) + Math.ceil(from));
};

const isValidLength = (str, maxLength) => str.length <= maxLength;

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const getArrayFrom = (count, callback) => Array.from({ length: count }, callback);

const isFocused = (element) => document.activeElement === element;

const hasDublicates = (array) => array.filter((element, index) => array.indexOf(element) !== index);

export { getRandomNumber, isValidLength, getRandomArrayElement, getArrayFrom, isFocused, hasDublicates };
