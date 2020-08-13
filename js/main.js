window.onload = function() {
    const ACTIVE_CLASS = 'active';
    const VISIBLE_CLASS = 'visible';
    const INVISIBLE_CLASS = 'invisible';
    const MENU_ITEM_SELECTOR = '.menu__item';
    const DATA_ITEM_SELECTOR = '.data__item';

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


    const profile = document.querySelector('.profile');
    // Проверяем: существует ли элемент. Если нет, то создаём его.
    profile.contains(document.getElementById('profile__interaction')) ?
        document.getElementById('profile__interaction') :
        profile.innerHTML += `<div id="profile__interaction" class="profile__interaction"></div>`;
    // берём элемент
    const profileInteraction = document.getElementById('profile__interaction');
    // вставляем profileInteraction в начало profile
    profile.prepend(profileInteraction);
    // наполняем элемент
    profileInteraction.innerHTML += profileInteractionElem();

    // Проверяем: существует ли элемент. Если нет, то создаём его.
    profile.contains(document.getElementById('profile__information')) ?
        document.getElementById('profile__information') :
        profile.innerHTML += `<div id="profile__information" class="profile__information"></div>`;
    // наполняем элемент
    const profileInformation = document.getElementById('profile__information');
    // addProfileInformation(profileInformation);
    profileInformation.innerHTML += profileInformationElem();

    // Проверяем: существует ли элемент. Если нет, то создаём его.
    profile.contains(document.getElementById('profile__personal-data')) ?
        document.getElementById('profile__personal-data') :
        profile.innerHTML += `<div id="profile__personal-data" class="profile__personal-data"></div>`;
    // берём элемент
    const profilePersonalData = document.getElementById('profile__personal-data');
    // вставляем profileInteraction в конец profile
    profile.append(profilePersonalData);
    // наполняем элемент
    profilePersonalData.innerHTML += profilePersonalDataElem();


    const friends = document.querySelector('.friends');
    // Проверяем: существует ли элемент. Если нет, то создаём его.
    friends.contains(document.getElementById('friends-list')) ?
        document.getElementById('friends-list') :
        friends.innerHTML += `<div id="friends-list" class="friends-list"></div>`;
    // берём элемент
    const friendsList = document.getElementById('friends-list');
    // наполняем элемент
    FRIENDS_DATA.forEach(el => friendsList.innerHTML += friendsListItem(el));
    // For the scrollbar view. Эта мерзка небогоугодная вещь написана для того, чтобы показать красоту скроллбара.
    friendsList.innerHTML += friendsList.innerHTML + friendsList.innerHTML;
}



