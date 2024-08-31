let currentIndex = 1;

function showImage(index) {
  const image = document.getElementById('carousel-image');
  image.src = `https://picsum.photos/800/600?${index}`;
}

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = currentIndex > 1 ? currentIndex - 1 : 10; // Loop de 1 a 10
  showImage(currentIndex);
});

document.getElementById('next').addEventListener('click', () => {
  currentIndex = currentIndex < 10 ? currentIndex + 1 : 1; // Loop de 1 a 10
  showImage(currentIndex);
});
