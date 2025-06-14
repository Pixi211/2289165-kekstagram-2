const container = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


const createThumbnail = ({ id, url, description, likes, comments }) => {
  const thumbnail = pictureTemplate.cloneNode(true);
  const img = thumbnail.querySelector('.picture__img');
  img.src = url;
  img.alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.id = id;
  return thumbnail;
};

const createPictures = (pictureSpecification) => {
  const fragment = document.createDocumentFragment();

  pictureSpecification.forEach((specification) => {
    fragment.appendChild(createThumbnail(specification));
  });

  container.appendChild(fragment);
};

export { createPictures, container };
