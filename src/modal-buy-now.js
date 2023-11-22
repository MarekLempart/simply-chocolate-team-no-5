(() => {
	const refs = {
		openModalBtn1: document.querySelector("[data-modal-buy-open]"),
		/*openModalBtn2: document.querySelector("[data-modal-buy2-open]"),*/
		closeModalBtn: document.querySelector("[data-modal-buy-close]"),
		modal: document.querySelector("[data-modal-buy-now]"),
	};

    refs.openModalBtn1.addEventListener("click", toggleModal);
    refs.openModalBtn2.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
	}
})();
