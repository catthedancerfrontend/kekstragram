import { renderPhotoPreview } from './preview.render.js';
import { showAlert } from './alert.js';

const getData = () => {
  fetch(
    'https://24.javascript.pages.academy/kekstagram/data',
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
    'https://24.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: data,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onError('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export { getData, sendData };
