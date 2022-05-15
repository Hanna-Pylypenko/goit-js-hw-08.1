import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryItemsMarkup);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item"> <a  href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" /></a> </div>`;
    })
    .join(' ');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
console.log(galleryItems);
