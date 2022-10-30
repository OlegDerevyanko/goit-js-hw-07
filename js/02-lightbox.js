import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems))

galleryContainer.addEventListener('click', onImageClick)

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

function onImageClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
        return;
    }

}
function createGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
     </a>`}).join('');
}
