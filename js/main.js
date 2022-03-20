const getRandomNumber = function (from, to) {
  if (from < 0 || to <= from) {
    throw new Error('Неверный параметр!');
  }
  return Math.floor(Math.random() * (Math.floor(to) - Math.ceil(from) + 1) + Math.ceil(from));
};


const isValidLength = function (str, maxLength) {
  return str.length <= maxLength;
};
isValidLength('HELLO', 10);

const DESCRIPTION = [
  'Если смогу, я сделаю это. Конец истории.',
  'Я не толстый. Меня просто легче увидеть, чем всех остальных.',
  'Я не ленивый. Просто у меня нет мотивации.',
  'Это просто моя жизнь в моем неповторимом стиле.',
  'Воскресенье — еще один способ сказать: «Какой чудесный день!»',
  'Предупреждение: на этом фото вы можете влюбиться в меня.',
  'Предупреждение: мой рот работает быстрее, чем мой мозг.',
  'Мне нравится думать, что я на диете. Как же это ужасно!',
  'Всегда есть дикая сторона, которая скрывается за самым невинным лицом.',
  'Я просто увидел самого умного человека в мире, когда смотрел в зеркало.',
  'Правило жизни: никогда не проверяйте глубину воды обеими ногами.',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAME = [
  'dominator3000',
  'hanging_with_my_gnomies',
  'sand_picture',
  'averagestudent',
  'Donald_300',
  'shaquille_oatmeal',
  'im_dolphin',
  'CatBot',
  'MasterCat',
  'fast_and_curious.',
];
let currentPhotoId = 0;
let currentCommentId = 0;
const MAX_COMMENTS_NUMBER = 15;
const OBJECT_COUNT = 25;
const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const getRandomComment = () => ({
  id: ++currentCommentId,
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAME),
});

const getArrayFrom = (count, callback) => Array.from({length: count}, callback);

const getRandomPhotoObject = () => ({
  id: ++currentPhotoId,
  url: `photos/${currentPhotoId}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomNumber(15, 200),
  comments: getArrayFrom(getRandomNumber(0, MAX_COMMENTS_NUMBER), getRandomComment),
});

// eslint-disable-next-line
const photos = getArrayFrom(OBJECT_COUNT, getRandomPhotoObject);
