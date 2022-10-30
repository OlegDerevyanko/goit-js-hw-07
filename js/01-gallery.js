import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createGallerySmallPictureCard(galleryItems);


galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);
galleryEl.addEventListener("click", openModalImg);

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

let instance = null;

function openModalImg(e) {
    e.preventDefault();

    if (!e.target.classList.contains('gallery__image')) {
        return;
    };
    const imgUrl = e.target.dataset.source;

    instance = basicLightbox.create(`<img src="${imgUrl}" width="800" height="600">`,
        {
            onShow() {
                document.addEventListener('keydown', closeModalImg)
            },
            onClose() {
                document.removeEventListener('keydown', closeModalImg)
            },
        },
    )

    instance.show()

};
function closeModalImg(e) {
    if (!e.code == 'Escape') {
        return;
    } else {
        console.log('Listener')
        instance.close()
    }
}