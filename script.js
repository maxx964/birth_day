

//  посилання на елементи модальних вікон і кнопок
 const firstModal = document.getElementById("firstModal");
 const secondModal = document.getElementById("secondModal");
 const openModalBtn = document.getElementById("openModalBtn");
 const closeFirstModalBtn = document.getElementById("closeFirstModalBtn");
const openSecondModalBtn = document.getElementById("openSecondModalBtn");
 const closeSecondModalBtn = document.getElementById("closeSecondModalBtn");

//  відкриття першого мод вікна
function openFirstModal() {
    firstModal.style.display = "block";
}

//  закриття першого мод вікна
 function closeFirstModal() {
     firstModal.style.display = "none";
 }

//  відкриття другого мод вікна
 function openSecondModal() {
    secondModal.style.display = "block";
 }

//  закриття другого мод вікна
 function closeSecondModal() {
     secondModal.style.display = "none";
 }

// тут оброблюємо ці довбані події
 openModalBtn.addEventListener("click", openFirstModal);
 closeFirstModalBtn.addEventListener("click", closeFirstModal);
 openSecondModalBtn.addEventListener("click", openSecondModal);
closeSecondModalBtn.addEventListener("click", closeSecondModal);
// =========================================================================



