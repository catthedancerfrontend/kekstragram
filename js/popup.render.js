const popupEl = document.querySelector('.big-picture');
const closeButtonEl = popupEl.querySelector('#picture-cancel');
const fullPhotoEl = popupEl.querySelector('.big-picture__img img');
const likesCountEl = popupEl.querySelector('.likes-count');
const commentsBlockEl = popupEl.querySelector('.social__comments');
const commentsCountEl = popupEl.querySelector('.comments-count');
const photoDescriptionEl = popupEl.querySelector('.social__caption');
const bodyElementEl = document.querySelector('body');
const commentCountBlock = popupEl.querySelector('.social__comment-count');

commentCountBlock.classList.add('hidden');
popupEl.querySelector('.social__comment-count').classList.add('hidden');

const fillPopup = (photo) => {
  commentsBlockEl.innerHTML = '';

  fullPhotoEl.src = photo.url;
  likesCountEl.textContent = photo.likes;
  commentsCountEl.textContent = photo.comments.length;
  photoDescriptionEl.textContent = photo.description;

  photo.comments.forEach((comment) => {
    const listItem = document.createElement('li');
    const img = document.createElement('img');
    const paragraph = document.createElement('p');
    listItem.classList.add('social__comment');
    img.classList.add('social__picture');
    paragraph.classList.add('social__text');
    listItem.appendChild(img);
    listItem.appendChild(paragraph);
    img.src = comment.avatar;
    img.alt = comment.name;
    img.width = 35;
    img.height = 35;
    paragraph.textContent = comment.message;
    commentsBlockEl.appendChild(listItem);
  });
};

const openPopup = (photo) => {
  popupEl.classList.remove('hidden');
  bodyElementEl.classList.add('modal-open');
  fillPopup(photo);
  const closePopup = () => {
    popupEl.classList.add('hidden');
    bodyElementEl.classList.remove('modal-open');
  };
  closeButtonEl.addEventListener('click', closePopup);
  document.addEventListener('keyup', (evt) => {
    if (evt.key === 'Escape') {
      closePopup();
    }
  });
};

export { openPopup };
