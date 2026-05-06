const tourAll = document.querySelector('.tour-all');
const tourAllToggle = document.querySelector('.js-tour-all-toggle');
const tourAllCategories = document.querySelectorAll('.js-tour-all-category');
const tourAllContent = document.querySelector('.tour-all__content');
const tourAllLists = document.querySelectorAll('.tour-all__list');
const tourAllItems = document.querySelectorAll('.tour-all__item');

tourAllToggle?.addEventListener('click', () => {
    tourAll.classList.toggle('is-open');

    if (!tourAll.classList.contains('is-open')) {
        closeSecondLevel();
    }
});

tourAllCategories.forEach((category) => {
    category.addEventListener('click', () => {
        const currentMenu = category.dataset.menu;
        const currentItem = category.closest('.tour-all__item');
        const isAlreadyActive = currentItem.classList.contains('is-active');

        closeSecondLevel();

        if (isAlreadyActive) {
            return;
        }

        currentItem.classList.add('is-active');
        tourAllContent.classList.add('is-open');

        const itemTop = currentItem.offsetTop;
        tourAllContent.style.setProperty('--tour-all-content-top', `${itemTop}px`);

        document
            .querySelector(`[data-content="${currentMenu}"]`)
            ?.classList.add('is-active');
    });
});

document.addEventListener('click', (event) => {
    if (!tourAll.contains(event.target)) {
        tourAll.classList.remove('is-open');
        closeSecondLevel();
    }
});

function closeSecondLevel() {
    tourAllItems.forEach((item) => {
        item.classList.remove('is-active');
    });

    tourAllLists.forEach((list) => {
        list.classList.remove('is-active');
    });

    tourAllContent?.classList.remove('is-open');
}

const mobileRoutesTabs = document.querySelectorAll('[data-mobile-routes-tab]');
const mobileRoutesContents = document.querySelectorAll('[data-mobile-routes-content]');

mobileRoutesTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const currentTab = tab.dataset.mobileRoutesTab;

        mobileRoutesTabs.forEach((item) => {
            item.classList.remove('is-active');
        });

        mobileRoutesContents.forEach((content) => {
            content.hidden = content.dataset.mobileRoutesContent !== currentTab;
        });

        tab.classList.add('is-active');
    });
});