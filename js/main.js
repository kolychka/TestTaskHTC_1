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
    profileInteraction.innerHTML += `<img src="images/${PROFILE_DATA.img}" alt="Фотография пользователя: ${PROFILE_DATA.username}" class="profile__photo photo">
                                    <button class="button profile__button">Добавить в друзья</button>`;

    // Проверяем: существует ли элемент. Если нет, то создаём его.
    profile.contains(document.getElementById('profile__information')) ?
        document.getElementById('profile__information') :
        profile.innerHTML += `<div id="profile__information" class="profile__information"></div>`;
    // наполняем элемент
    const profileInformation = document.getElementById('profile__information');
    profileInformation.innerHTML += `<label class="profile__username">${PROFILE_DATA.username}</label>
                                    <label class="profile_color_gray">${PROFILE_DATA.hometown}</label>`;

    // Проверяем: существует ли элемент. Если нет, то создаём его.
    profile.contains(document.getElementById('profile__personal-data')) ?
        document.getElementById('profile__personal-data') :
        profile.innerHTML += `<div id="profile__personal-data" class="profile__personal-data"></div>`;
    // берём элемент
    const profilePersonalData = document.getElementById('profile__personal-data');
    // вставляем profileInteraction в конец profile
    profile.append(profilePersonalData);
    // наполняем элемент
    profilePersonalData.innerHTML += `
        <section class="main-section">
            <section class="sub-section_item text_font-bold">
                <div class="sub-section_margin-vertical">Семейное положение</div>
                <div class="sub-section_margin-vertical">Телефон</div>
                <div class="sub-section_margin-vertical">E-mail</div>
            </section>
            <section class="sub-section_item">
                <div class="sub-section_margin-vertical">${PROFILE_DATA.maritalStatus}</div>
                <div class="sub-section_margin-vertical">${PROFILE_DATA.phoneNumber}</div>
                <div class="sub-section_margin-vertical link">${PROFILE_DATA.eMail}</div>
            </section>
        </section>
        <label class=" text_font-bold">Интересы</label>
        <div class="hobby">
            <button class="button interest">${PROFILE_DATA.hobby1}</button>
            <button class="button interest">${PROFILE_DATA.hobby2}</button>
            <button class="button interest">${PROFILE_DATA.hobby3}</button>
        </div>
        <form action="" class="">
            <label><input type="text" class="form-input_size interest"></label>
            <button class="button profile__button">Добавить интерес</button>
        </form>
    `;


    const friends = document.querySelector('.friends');
    // Проверяем: существует ли элемент. Если нет, то создаём его.
    friends.contains(document.getElementById('friends-list')) ?
        document.getElementById('friends-list') :
        friends.innerHTML += `<div id="friends-list" class="friends-list"></div>`;
    // берём элемент
    const friendsList = document.getElementById('friends-list');
    // наполняем элемент
    for (const [key, value] of Object.entries(FRIENDS_DATA)) {
        friendsList.innerHTML += `
            <div class="friends-list-item">
                <img src="images/${value.img}" alt="Фотография пользователя: ${value.name}" class="friends-list-item__photo">
                <a class="friends-list-item__name link">${value.name}</a>
                <div class="friends-list-item__hometown">${value.hometown}</div>
                <div class="friends-list-item__status">${value.status}</div>
            </div>        
        `;
    }
    friendsList.innerHTML += friendsList.innerHTML + friendsList.innerHTML; // for the scrollbar view
}