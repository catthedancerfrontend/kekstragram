import {getRandomNumber, getRandomArrayElement, getRandomObjectArray} from './util.js';

let currentPhotoId = 0;
let currentCommentId = 0;
const MAX_COMMENTS_NUMBER = 15;

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

const getRandomComment = () => ({
  id: ++currentCommentId,
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAME),
});

const getRandomPhotoObject = () => ({
  id: ++currentPhotoId,
  url: `photos/${currentPhotoId}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomNumber(15, 200),
  comments: getRandomObjectArray(getRandomNumber(0, MAX_COMMENTS_NUMBER), getRandomComment),
});

const OBJECT_COUNT = 25;
// eslint-disable-next-line
const photos = getRandomObjectArray(OBJECT_COUNT, getRandomPhotoObject);

export {};