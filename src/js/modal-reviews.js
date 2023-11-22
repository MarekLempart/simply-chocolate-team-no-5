(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-reviews-open]"),
    closeModalBtn: document.querySelector("[data-modal-reviews-close]"),
    modal: document.querySelector("[data-modal-reviews]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();