import { filterConfigMap } from './filter-config.js';

const imageUpload = document.querySelector('.img-upload');
const scaleControlSmallerButton = imageUpload.querySelector('.scale__control--smaller');
const scaleControlBiggerButton = imageUpload.querySelector('.scale__control--bigger');
const scaleControlValue = imageUpload.querySelector('.scale__control--value');
const imageUploadPreview = imageUpload.querySelector('.img-upload__preview');
const effectsButton = imageUpload.querySelectorAll('.effects__radio');
const sliderElement = imageUpload.querySelector('.effect-level__slider');
const effectRadioButtons = imageUpload.querySelector('.effects__list');
const sliderBackgroundElement = imageUpload.querySelector('.img-upload__effect-level');

let valueScale = 100;
let scaleControl = 1;
const MAX_SCALE = 1;
const MIN_SCALE = 0.25;
const SCALE_STEP = 0.25;
const VALUE_STEP = 25;

const FILTER_NAMES = {NONE: 'none', CHROME: 'chrome', SEPIA: 'sepia', MARVIN: 'marvin', PHOBOS: 'phobos', HEAT: 'heat'};

scaleControlSmallerButton.addEventListener('click', () => {
  if (scaleControl <= MIN_SCALE) {
    return;
  }
  scaleControl -= SCALE_STEP;
  valueScale -= VALUE_STEP;
  imageUploadPreview.style.transform = `scale(${scaleControl})`;
  scaleControlValue.value = `${valueScale}%`;
});

scaleControlBiggerButton.addEventListener('click', () => {
  if (scaleControl >= MAX_SCALE) {
    return;
  }
  scaleControl += SCALE_STEP;
  valueScale += VALUE_STEP;
  imageUploadPreview.style.transform = `scale(${scaleControl})`;
  scaleControlValue.value = `${valueScale}%`;
});


noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: function (filterValue) {
      if (Number.isInteger(filterValue)) {
        return filterValue.toFixed(0);
      }
      return filterValue.toFixed(1);
    },
    from: function (filterValue) {
      return parseFloat(filterValue);
    },
  },
});

const applyIntensity = (intensity) => {
  const effectValue = effectRadioButtons.querySelector('input[name="effect"]:checked').value ;
  switch (effectValue) {
    case FILTER_NAMES.NONE:
      break;
    case FILTER_NAMES.CHROME:
      imageUploadPreview.style.filter = `grayscale(${intensity})`;
      break;
    case FILTER_NAMES.SEPIA:
      imageUploadPreview.style.filter = `sepia(${intensity})`;
      break;
    case FILTER_NAMES.MARVIN:
      imageUploadPreview.style.filter = `invert(${intensity}%)`;
      break;
    case FILTER_NAMES.PHOBOS:
      imageUploadPreview.style.filter = `blur(${intensity}px)`;
      break;
    case FILTER_NAMES.HEAT:
      imageUploadPreview.style.filter = `brightness(${intensity})`;
      break;
  }
};

sliderElement.noUiSlider.on('update', (_, handle, unencoded) => {
  applyIntensity(unencoded[handle]);
});

const addFilter = (filter) => {
  sliderBackgroundElement.classList.remove('hidden');
  imageUploadPreview.classList = 'img-upload__preview';
  switch (filter) {
    case FILTER_NAMES.NONE:
      sliderBackgroundElement.classList.add('hidden');
      imageUploadPreview.classList.add('effects__preview--none');
      imageUploadPreview.style = '';
      break;
    case FILTER_NAMES.CHROME:
      imageUploadPreview.classList.add('effects__preview--chrome');
      sliderElement.noUiSlider.updateOptions(filterConfigMap.chrome);
      break;
    case FILTER_NAMES.SEPIA:
      imageUploadPreview.classList.add('effects__preview--sepia');
      sliderElement.noUiSlider.updateOptions(filterConfigMap.sepia);
      break;
    case FILTER_NAMES.MARVIN:
      imageUploadPreview.classList.add('effects__preview--marvin');
      sliderElement.noUiSlider.updateOptions(filterConfigMap.marvin);
      break;
    case FILTER_NAMES.PHOBOS:
      imageUploadPreview.classList.add('effects__preview--phobos');
      sliderElement.noUiSlider.updateOptions(filterConfigMap.phobos);
      break;
    case FILTER_NAMES.HEAT:
      imageUploadPreview.classList.add('effects__preview--heat');
      sliderElement.noUiSlider.updateOptions(filterConfigMap.heat);
      break;
  }
};

effectsButton.forEach((element) => element.addEventListener('click', () => {
  addFilter(element.value);
}));
