// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const galleryItems = document.querySelectorAll('.gallery-item img');

let currentIndex = 0;

function showLightbox(index) {
  lightbox.style.display = 'block';
  lightboxImg.src = galleryItems[index].src;
  currentIndex = index;
}

galleryItems.forEach((img, index) => {
  img.addEventListener('click', () => showLightbox(index));
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  lightboxImg.src = galleryItems[currentIndex].src;
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  lightboxImg.src = galleryItems[currentIndex].src;
});

// Filter functionality
const filterButtons = document.querySelectorAll('.filter-buttons button');
const items = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    items.forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
