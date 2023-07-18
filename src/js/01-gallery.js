// Add imports above this line
import { galleryItems } from './gallery-items';
console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(SimpleLightbox);


const galleryContainer = document.querySelector('.gallery');
const itemMarkup = createGalleryItemMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemMarkup);

function createGalleryItemMarkup(items) {
  return items.map(({ original, preview, description }) => {
    return `
    <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`
  }).join('');

}



const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});