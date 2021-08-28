"use strict";

let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let closeBtn = document.querySelector(".close-modal");
let openBtn = document.querySelectorAll(".show_modal");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let item of openBtn) {
  item.addEventListener("click", openModal);
}

closeBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

//This is for keys on the keyboard
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
