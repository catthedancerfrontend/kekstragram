const popupEl = document.querySelector('.big-picture');
const closeButtonEl = popupEl.querySelector('#picture-cancel');
const fullPhotoEl = popupEl.querySelector('.big-picture__img img');
const likesCountEl = popupEl.querySelector('.likes-count');
const commentsBlockEl = popupEl.querySelector('.social__comments');
const commentsCountEl = popupEl.querySelector('.comments-count');
const photoDescriptionEl = popupEl.querySelector('.social__caption');
const bodyElementEl = document.querySelector('body');
const commentCountBlock = popupEl.querySelector('.social__comment-count');
const commentLoader = popupEl.querySelector('.comments-loader');
const currentsCommentsCount = popupEl.querySelector('.comments-current');
const COMMENTS_VISIBILITY_STEP = 5;

const hideShowMoreButton = (visibleComments, commentsLength) => {
  if (visibleComments > commentsLength) {
    commentLoader.classList.add('hidden');
  } else {
    commentLoader.classList.remove('hidden');
  }
};

const renderComments = (photo, visibleComments) => {
  for (let i = visibleComments - COMMENTS_VISIBILITY_STEP; i < visibleComments; i++) {
    if (!photo.comments[i]) {
      break;
    }
    const listItem = document.createElement('li');
    const img = document.createElement('img');
    const paragraph = document.createElement('p');
    listItem.classList.add('social__comment');
    img.classList.add('social__picture');
    paragraph.classList.add('social__text');
    listItem.appendChild(img);
    listItem.appendChild(paragraph);
    img.src = photo.comments[i].avatar;
    img.alt = photo.comments[i].name;
    img.width = 35;
    img.height = 35;
    paragraph.textContent = photo.comments[i].message;
    commentsBlockEl.appendChild(listItem);
  }
  currentsCommentsCount.textContent = commentsBlockEl.children.length;
  hideShowMoreButton(visibleComments, photo.comments.length);
};

const fillPopup = (photo) => {
  let visibleComments = 5;

  commentsBlockEl.innerHTML = '';

  fullPhotoEl.src = photo.url;
  likesCountEl.textContent = photo.likes;
  commentsCountEl.textContent = photo.comments.length;
  photoDescriptionEl.textContent = photo.description;
  renderComments(photo, visibleComments);

  commentLoader.addEventListener('click', () => {
    visibleComments = visibleComments + COMMENTS_VISIBILITY_STEP;
    renderComments(photo, visibleComments);
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
