import { openPopup } from './popup.render.js';

const previewTemplate = document.querySelector('#picture').content.querySelector('a');
const previewWrapper = document.querySelector('.pictures');

const previewFragment = document.createDocumentFragment();

const renderPhotoPreview = (photos) => {
  photos.forEach((photo) => {
    const previewTemplateClone = previewTemplate.cloneNode(true);
    previewTemplateClone.querySelector('img').src = photo.url;
    previewTemplateClone.querySelector('.picture__likes').textContent = photo.likes;
    previewTemplateClone.querySelector('.picture__comments').textContent = photo.comments.length.toString();
    previewTemplateClone.addEventListener('click', (evt) => {
      evt.preventDefault();
      openPopup(photo);
    });
    previewFragment.appendChild(previewTemplateClone);
  });
  previewWrapper.appendChild(previewFragment);
};

const clearPhotoArray = () => {
  const allPhotos = document.querySelectorAll('.picture');
  allPhotos.forEach((element) => {
    element.remove();
  });
};


export { renderPhotoPreview, clearPhotoArray };
