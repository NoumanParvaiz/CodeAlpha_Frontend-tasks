const images = [
  "https://picsum.photos/id/1018/800/600",
  "https://picsum.photos/id/1015/800/600",
  "https://picsum.photos/id/1025/800/600",
  "https://picsum.photos/id/1039/800/600",
  "https://picsum.photos/id/1043/800/600",
  "https://picsum.photos/id/1074/800/600"
];

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = images[currentIndex];
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(step) {
  currentIndex += step;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  document.getElementById("lightbox-img").src = images[currentIndex];
}

function filterImages(category) {
  const items = document.querySelectorAll(".gallery-item");
  const buttons = document.querySelectorAll(".filter-buttons button");

  buttons.forEach(button => button.classList.remove("active"));
  event.target.classList.add("active");

  items.forEach(item => {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
} 