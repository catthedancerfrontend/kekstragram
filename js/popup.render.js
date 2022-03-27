const popup = document.querySelector('.big-picture');
const closeButton = popup.querySelector('#picture-cancel');
const fullPhoto = popup.querySelector('.big-picture__img img');
const likesCount = popup.querySelector('.likes-count');
const commentsBlock = popup.querySelector('.social__comments');
const commentsCount = popup.querySelector('.comments-count');
const photoDescription = popup.querySelector('.social__caption');
const bodyElement = document.querySelector('body');

const commentCountBlock = popup.querySelector('.social__comment-count');
commentCountBlock.classList.add('hidden');

const commentsLoader = popup.querySelector('.comments-loader');
commentsLoader.classList.add('hidden');

const fillPopup = (photo) => {
  commentsBlock.innerHTML = '';
  fullPhoto.src = photo.url;
  likesCount.textContent = photo.likes;
  commentsCount.textContent = photo.comments.length;
  photoDescription.textContent = photo.description;
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
    commentsBlock.appendChild(listItem);
  });

};

const openPopup = (photo) => {
  popup.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  fillPopup(photo);
};

const closePopup = () => {
  popup.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
};

closeButton.addEventListener('click', () => {
  closePopup();
});

document.addEventListener('keyup', (evt) => {
  if (evt.key === 'Escape') {
    closePopup();
  }
});

export { openPopup };


