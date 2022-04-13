let photos = [];

const setPhotos = (photoArray) => {
  photos = photoArray;
};

const getPhotos = () => [...photos];

export { getPhotos, setPhotos };
