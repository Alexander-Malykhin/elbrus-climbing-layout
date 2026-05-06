const callbackButtons = document.querySelectorAll('.header-top__callback, .mobile-menu__button');
const callbackModal = document.querySelector('.js-callback-modal');
const callbackClose = document.querySelector('.js-callback-close');

callbackButtons.forEach((button) => {
    button.addEventListener('click', openCallbackModal);
});

callbackClose?.addEventListener('click', closeCallbackModal);

callbackModal?.addEventListener('click', (event) => {
    if (event.target === callbackModal) {
        closeCallbackModal();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeCallbackModal();
    }
});

function openCallbackModal() {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    callbackModal?.classList.add('is-open');
    document.body.classList.add('is-modal-open');
    document.body.style.paddingRight = `${scrollbarWidth}px`;
}

function closeCallbackModal() {
    callbackModal?.classList.remove('is-open');
    document.body.classList.remove('is-modal-open');
    document.body.style.paddingRight = '';
}