window.onload = function() {
    const ACTIVE_CLASS = 'active';
    const VISIBLE_CLASS = 'visible';
    const INVISIBLE_CLASS = 'invisible';
    const MENU_ITEM_SELECTOR = '.menu-item';
    const DATA_ITEM_SELECTOR = '.data-item';

    const menuItems = document.querySelectorAll(MENU_ITEM_SELECTOR); // элементы меню
    const dataItems = document.querySelectorAll(DATA_ITEM_SELECTOR); // внутренности вкладок
    menuItems.forEach(item => {
        item.onclick = function() { // чтобы не потерять контекст, НЕ используем стрелочную функцию
            // переключаем вкладки
            menuItems.forEach(elem => elem.classList.remove(ACTIVE_CLASS));
            this.classList.add(ACTIVE_CLASS);
            // скрываем/показываем содержимое вкладок
            dataItems.forEach(elem => {
                elem.classList.remove(VISIBLE_CLASS);
                elem.classList.add(INVISIBLE_CLASS);
            });
            // это конкретная внутренность активной вкладки, которой надо назначить нужные классы
            const it = document.querySelector(`.${this.dataset.profileItem}`);
            it.classList.add(VISIBLE_CLASS);
            it.classList.remove(INVISIBLE_CLASS);
        }
    });
}