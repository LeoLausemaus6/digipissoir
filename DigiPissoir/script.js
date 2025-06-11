const imageContainer = document.getElementById("image-container");
const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg"
];

let currentIndex = 0;

function showNextImage() {
  const img = document.createElement("img");
  img.src = images[currentIndex];
  img.addEventListener("click", () => {
    img.style.transform = "scale(6)";
    setTimeout(() => {
      currentIndex++;
      if (currentIndex < images.length) {
        imageContainer.innerHTML = "";
        showNextImage();
      } else {
        showGrid();
      }
    }, 1000);
  });
  imageContainer.appendChild(img);
}

function showGrid() {
  imageContainer.innerHTML = "";
  imageContainer.style.display = "grid";
  imageContainer.style.gridTemplateColumns = "repeat(3, 1fr)";
  imageContainer.style.gridTemplateRows = "repeat(3, 1fr)";
  imageContainer.style.gap = "5px";

  for (let i = 5; i <= 13; i++) {
    const img = document.createElement("img");
    img.src = `images/img${i}.jpg`;
    img.classList.add("grid-image");
    img.addEventListener("click", () => {
      openFullscreenImage(i); // Zeichnen bauen wir später wieder ein
    });
    imageContainer.appendChild(img);
  }
}


function openFullscreenImage(index) {
  imageContainer.innerHTML = "";
  imageContainer.style.display = "block";

  const img = document.createElement("img");
  img.src = `images/img${index}.jpg`;
  img.style.width = "100vw";
  img.style.height = "100vh";
  img.style.objectFit = "contain";
  img.style.position = "absolute";
  img.style.top = "0";
  img.style.left = "0";
  img.style.backgroundColor = "black";

  imageContainer.appendChild(img);
}



showNextImage();
