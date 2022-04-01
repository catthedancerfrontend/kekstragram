import { isValidLength, hasDublicates } from './util.js';

const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;  //hashtag validation
const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAG_AMOUNT = 5;

const isValidateComment = (comment) => isValidLength(comment, MAX_COMMENT_LENGTH);

const isValidHashtag = (hashtag) => {
  let error = null;
  const hashtagArr = hashtag.trim().split(' ').map((element) => element.toLowerCase());
  if (hashtagArr.length > MAX_HASHTAG_AMOUNT) {
    error = 'Указано больше 5 хэштегов!';
  }
  if (hasDublicates(hashtagArr).length > 0) {
    error = 'В хэштегах присутствуют дубликаты!';
  }
  hashtagArr.forEach((element) => {
    if (!re.test(element)) {
      error = 'Неверный формат!';
    }
  });
  return error;
};

export { isValidateComment, isValidHashtag };
