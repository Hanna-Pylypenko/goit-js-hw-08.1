 (() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle('modal-container--is-hidden');
    }
})();
  

(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-form-open]'),
      closeModalBtn: document.querySelector('[data-modal-form-close]'),
      modal: document.querySelector('[data-modal-form]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle('modal-container--is-hidden');
    }
})();
  
(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-header-open]'),
      closeModalBtn: document.querySelector('[data-modal-header-close]'),
      modal: document.querySelector('[data-modal-header]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle('modal-header-wrap--is-hidden');
    }
})();
  

(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-header1-open]'),
      closeModalBtn: document.querySelector('[data-modal-header1-close]'),
      modal: document.querySelector('[data-modal-header]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle('modal-header-wrap--is-hidden');
    }
 })();
