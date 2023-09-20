const list = document.querySelector(".list");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const items = document.querySelectorAll(".list li");

let index = 0;

function showItems() {
  items.forEach((item, i) => {
    if (i >= index && i < index + 4) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}


function nextSlide() {
  index += 4;
  if (index >= items.length) {
    index = 0;
  }
  showItems();
}

function prevSlide() {
  index -= 4;
  if (index < 0) {
    index = items.length - 4;
  }
  showItems();
}

showItems();
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
// =================================================================
  function nextSlide() {
  index += 4;
  if (index >= items.length) {
    index = 0;
  }
  showItems();
  updatePagination();
}

function prevSlide() {
  index -= 4;
  if (index < 0) {
    index = items.length - 4;
  }
  showItems();
  updatePagination();
}
// ============================================================

function updatePagination() {
  const pageButtons = document.querySelectorAll(".page-btn");
  pageButtons.forEach((button, i) => {
    if (i * 4 >= index && i * 4 < index + 4) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}
