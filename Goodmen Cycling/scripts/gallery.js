const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    alert(`You clicked on: ${img.alt}`);
  });
});
