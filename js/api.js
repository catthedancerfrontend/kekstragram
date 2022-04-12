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
export { getData };
