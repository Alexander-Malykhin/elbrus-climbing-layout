const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.js-mobile-menu');
const mobileMenuClose = document.querySelector('.js-mobile-menu-close');

burger?.addEventListener('click', openMobileMenu);
mobileMenuClose?.addEventListener('click', closeMobileMenu);

mobileMenu?.addEventListener('click', (event) => {
    if (event.target === mobileMenu) {
        closeMobileMenu();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeMobileMenu();
    }
});

function openMobileMenu() {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    mobileMenu?.classList.add('is-open');
    document.body.classList.add('is-menu-open');
    document.body.style.paddingRight = `${scrollbarWidth}px`;
}

function closeMobileMenu() {
    mobileMenu?.classList.remove('is-open');
    document.body.classList.remove('is-menu-open');
    document.body.style.paddingRight = '';
}


const mobileTours = document.querySelector('.mobile-tours');
const mobileToursTitle = document.querySelector('.js-mobile-tours-title');
const mobileTourCategories = document.querySelectorAll('.js-mobile-tours-category');

mobileToursTitle?.addEventListener('click', () => {
    mobileTours?.classList.toggle('is-open');
});

mobileTourCategories.forEach((category) => {
    category.addEventListener('click', () => {
        const item = category.closest('.mobile-tours__item');

        item?.classList.toggle('is-open');
    });
});