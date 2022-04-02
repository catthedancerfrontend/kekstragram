import { isValidateComment, isValidHashtag } from './validation.js';
import { isFocused } from './util.js';
const bodyElement = document.querySelector('body');
const uploadImageInput = document.querySelector('#upload-file');
const imageOverlay = document.querySelector('.img-upload__overlay');
const formElement = document.querySelector('#upload-select-image');
const cancelButtonElement = formElement.querySelector('#upload-cancel');
const commentInputElement = formElement.querySelector('.text__description');
const hashtagInputElement = formElement.querySelector('.text__hashtags');


const hideImagePopup = () => {
  imageOverlay.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.querySelector('.img-upload__form').reset();
  document.removeEventListener('keyup', escHandler);
};

const escHandler = (evt) => {
  if (evt.key === 'Escape' && !isFocused(commentInputElement) && !isFocused(hashtagInputElement)) {
    hideImagePopup();
  }
};

const showImagePopup = () => {
  imageOverlay.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  cancelButtonElement.addEventListener('click', hideImagePopup);
  document.addEventListener('keyup', escHandler);
};

uploadImageInput.addEventListener('change', showImagePopup);

formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
});

commentInputElement.addEventListener('input', () => {
  commentInputElement.setCustomValidity('');
  const commentValidationResult = isValidateComment(commentInputElement.value);
  if (!commentValidationResult) {
    commentInputElement.setCustomValidity('Длина комментария превышает 140 символов!');
  }
});

hashtagInputElement.addEventListener('input', () => {
  hashtagInputElement.setCustomValidity('');
  const hashtagValidationResult = isValidHashtag(hashtagInputElement.value);
  if (hashtagValidationResult) {
    hashtagInputElement.setCustomValidity(hashtagValidationResult);
  }
});
