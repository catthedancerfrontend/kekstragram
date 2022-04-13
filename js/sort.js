import { getPhotos } from './data.js';
import { getRandomArrayElement } from './util.js';
import { renderPhotoPreview, clearPhotoArray } from './preview.render.js';
import { debounce } from './util.js';

const filterBlock = document.querySelector('.img-filters');
const randomFilterElement = filterBlock.querySelector('#filter-random');
const defaultFilterElement = filterBlock.querySelector('#filter-default');
const discussedFilterElement = filterBlock.querySelector('#filter-discussed');
const DELAY = 500;


const showFilter = () => {
  filterBlock.classList.remove('hidden');
  filterBlock.classList.remove('img-filters--inactive');
  filterBlock.classList.add('img-filters--active');
};

const setActiveSortElement = (activeElement) => {
  [randomFilterElement, defaultFilterElement, discussedFilterElement].forEach((element) => {
    element.classList.remove('img-filters__button--active');
  });
  activeElement.classList.add('img-filters__button--active');
};

defaultFilterElement.addEventListener('click', debounce(() => {
  const photos = getPhotos();
  clearPhotoArray();
  renderPhotoPreview(photos);
  setActiveSortElement(defaultFilterElement);
}, DELAY));

randomFilterElement.addEventListener('click', debounce(() => {
  const photos = getPhotos();
  const randomPhotoArray = [];
  while (randomPhotoArray.length < 10) {
    const newRandomPhoto = getRandomArrayElement(photos);
    if (!randomPhotoArray.includes(newRandomPhoto)) {
      randomPhotoArray.push(newRandomPhoto);
    }
  }
  clearPhotoArray();
  renderPhotoPreview(randomPhotoArray);
  setActiveSortElement(randomFilterElement);
}, DELAY));

discussedFilterElement.addEventListener('click', debounce(() => {
  const photos = getPhotos();
  const discussedPhotosArray = photos.sort((photo1, photo2) => photo2.comments.length - photo1.comments.length);
  clearPhotoArray();
  renderPhotoPreview(discussedPhotosArray);
  setActiveSortElement(discussedFilterElement);
}, DELAY));

export { showFilter };
