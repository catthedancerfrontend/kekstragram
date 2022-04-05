const scaleControlSmallerButton = document.querySelector('.scale__control--smaller');
const scaleControlBiggerButton = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imageUploadPreview = document.querySelector('.img-upload__preview');
const effectsButton = document.querySelectorAll('.effects__radio');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const effectRadioButtons = document.querySelector('.effects__list');
const sliderBackgroundElement = document.querySelector('.img-upload__effect-level');

valueElement.value = 100;

let value = 100;
let scale = 1;
const MAX_SCALE = 1;
const MIN_SCALE = 0.25;
const SCALE_STEP = 0.25;
const VALUE_STEP = 25;

const filterConfigMap = {
  chrome: {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    start: 1,
  },
  sepia: {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    start: 1,
  },
  marvin: {
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    start: 100,
  },
  phobos: {
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
    start: 3,
  },
  heat: {
    range: {
      min: 1,
      max: 3,
    },
    step: 0.1,
    start: 3,
  },
};

scaleControlSmallerButton.addEventListener('click', () => {
  if (scale <= MIN_SCALE) {
    return;
  }
  scale -= SCALE_STEP;
  value -= VALUE_STEP;
  imageUploadPreview.style.transform = `scale(${scale})`;
  scaleControlValue.value = `${value}%`;
});

scaleControlBiggerButton.addEventListener('click', () => {
  if (scale >= MAX_SCALE) {
    return;
  }
  scale += SCALE_STEP;
  value += VALUE_STEP;
  imageUploadPreview.style.transform = `scale(${scale})`;
  scaleControlValue.value = `${value}%`;
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
    case 'none':
      break;
    case 'chrome':
      imageUploadPreview.style.filter = `grayscale(${intensity})`;
      break;
    case 'sepia':
      imageUploadPreview.style.filter = `sepia(${intensity})`;
      break;
    case 'marvin':
      imageUploadPreview.style.filter = `invert(${intensity}%)`;
      break;
    case 'phobos':
      imageUploadPreview.style.filter = `blur(${intensity}px)`;
      break;
    case 'heat':
      imageUploadPreview.style.filter = `brightness(${intensity})`;
      break;
  }
};

sliderElement.noUiSlider.on('update', (_, handle, unencoded) => {
  unencoded[handle];
  applyIntensity(unencoded[handle]);
});


effectsButton.forEach((element) => element.addEventListener('click', () => {
  const addFilter = (filter) => {
    sliderBackgroundElement.classList.remove('hidden');
    imageUploadPreview.classList = 'img-upload__preview';
    switch (filter) {
      case 'none':
        sliderBackgroundElement.classList.add('hidden');
        imageUploadPreview.classList.add('effects__preview--none');
        imageUploadPreview.style = '';
        break;
      case 'chrome':
        imageUploadPreview.classList.add('effects__preview--chrome');
        sliderElement.noUiSlider.updateOptions(filterConfigMap.chrome);
        break;
      case 'sepia':
        imageUploadPreview.classList.add('effects__preview--sepia');
        sliderElement.noUiSlider.updateOptions(filterConfigMap.sepia);
        break;
      case 'marvin':
        imageUploadPreview.classList.add('effects__preview--marvin');
        sliderElement.noUiSlider.updateOptions(filterConfigMap.marvin);
        break;
      case 'phobos':
        imageUploadPreview.classList.add('effects__preview--phobos');
        sliderElement.noUiSlider.updateOptions(filterConfigMap.phobos);
        break;
      case 'heat':
        imageUploadPreview.classList.add('effects__preview--heat');
        sliderElement.noUiSlider.updateOptions(filterConfigMap.heat);
        break;
    }
  };
  addFilter(element.value);
}));

