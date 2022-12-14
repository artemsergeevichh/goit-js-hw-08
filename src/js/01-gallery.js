import "simplelightbox/dist/simple-lightbox.min.css";

import "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';    
console.log(galleryItems);

const containerGallery = document.querySelector('.gallery');

const generalGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image"
     src="${preview}"
    alt="${description}" />
  </a>`;;
  })
  .join('');

  containerGallery.insertAdjacentHTML('beforeend', generalGallery);

  let lightbox = new SimpleLightbox('.gallery a', { 

    captionsData: `alt`, 
    captionPosition:'bottom', 
    captionDelay: 200,
  });

