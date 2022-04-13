import { renderPhotoPreview } from './preview.render.js';
import { showAlert } from './alert.js';
const GET_URL = 'https://24.javascript.pages.academy/kekstagram/data';
const POST_URL = 'https://24.javascript.pages.academy/kekstagram';

const getData = () => {
  fetch(
    GET_URL,
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {
      renderPhotoPreview(data);
    })
    .catch((err) => {
      showAlert(err);
    });
};

const sendData = (data, onSuccess, onError) => {
  fetch(
    POST_URL,
    {
      method: 'POST',
      body: data,
    },
  )
    .then((response) => {
      response.ok ? onSuccess() : onError('Не удалось отправить форму. Попробуйте ещё раз');
    })
    .catch((err) => {
      onError(err);
    });
};

export { getData, sendData };
