import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGallerySmallPictureCard(galleryItems);
let instance;

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener("click", onGalleryImageClick);

function createGallerySmallPictureCard(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>`;
        })
        .join("");
}
function onGalleryImageClick(e) {
    e.preventDefault();

    if (!e.target.classList.contains('gallery__image')) {
        return;
    };
    let galleryImages = e.target.dataset.source;

    instance = basicLightbox.create(`<img src="${galleryImages}" width="800" height="600">`);
        instance.show();

        window.addEventListener("keydown", onEscKeyPress);
        console.log('Esc');
};
        function onEscKeyPress(e) {
      if (e.key === "Escape") {
            instance.close(() => console.log("Esc"));
          window.removeEventListener("keydown", onEscKeyPress);
          window.removeEventListener("click", onGalleryImageClick);
      }
            
            
    }