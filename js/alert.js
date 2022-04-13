const ALERT_SHOW_TIME = 5000;
const successPopup = document.querySelector('#success').content.querySelector('section');
const errorPopup = document.querySelector('#error').content.querySelector('section');

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const closeStatePopup = (popup) => {
  popup.remove();
};

const escHandler = (evt, popup) => {
  if (evt.key === 'Escape') {
    closeStatePopup(popup);
  }
};

const showStatePopup = (isError = false) => {
  const element = isError ? errorPopup : successPopup;
  const elementClass = isError ? 'error' : 'success';
  document.body.appendChild(element);
  const popup = document.querySelector(`.${elementClass}`);
  const successButton = popup.querySelector(`.${elementClass}__button`);
  successButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    closeStatePopup(popup);
  });
  popup.addEventListener('click', () => closeStatePopup(popup));
  document.addEventListener('keyup', (evt) => escHandler(evt, popup));
};

export { showAlert, showStatePopup};
