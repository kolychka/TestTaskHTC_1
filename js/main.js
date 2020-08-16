window.onload = function() {
    const ACTIVE_CLASS = 'active';
    const VISIBLE_CLASS = 'visible';
    const INVISIBLE_CLASS = 'invisible';
    const MENU_ITEM_SELECTOR = '.menu__item';
    const DATA_ITEM_SELECTOR = '.data__item';

    const menuItems = document.querySelectorAll(MENU_ITEM_SELECTOR);
    const dataItems = document.querySelectorAll(DATA_ITEM_SELECTOR);
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

    document.getElementById('profile__interaction').innerHTML = profileInteractionElem();
    document.getElementById('profile__information').innerHTML = profileInformationElem();
    const profilePersonalData = document.getElementById('profile__personal-data');
    profilePersonalData.innerHTML = profilePersonalDataElem();

    // Проверяем: существует ли элемент. Если нет, то создаём его.
    if (!profilePersonalData.contains(document.getElementById('hobby'))) {
        profilePersonalData.innerHTML += hobbyContainer();
    }
    const hobby = document.querySelector('.hobby');
    HOBBY_DATA.forEach(elem => hobby.append(hobbyElem(elem)));

    const profileUsername = document.querySelector('.profile__username');
    if (profileUsername) {
        profileUsername.addEventListener('focusout', function() {
            localStorage.setItem('username', this.innerHTML);
        });
        if (localStorage.getItem('username')) {
            profileUsername.innerHTML = localStorage.getItem('username');
        }
    }

    const mainSection = document.querySelector('.main-section');
    if (!mainSection.contains(document.getElementById('sub-section__data'))) {
        mainSection.innerHTML += subSectionItem();
    }
    const subSection = document.getElementById('sub-section__data');
    subSection.append(subSectionPhoneNumber(PROFILE_DATA.phoneNumber));
    subSection.append(subSectionEMail(PROFILE_DATA.eMail));

    const phoneNumber = document.querySelector('#sub-section_phoneNumber');
    if (phoneNumber) {
        phoneNumber.addEventListener('focusout', function() {
            localStorage.setItem('phoneNumber', this.innerHTML);
        });
        if (localStorage.getItem('phoneNumber')) {
            phoneNumber.innerHTML = localStorage.getItem('phoneNumber');
        }
    }
    const eMail = document.querySelector('#sub-section_e-mail');
    if (eMail) {
        eMail.addEventListener('focusout', function() {
            localStorage.setItem('eMail', this.innerHTML);
        });
        if (localStorage.getItem('eMail')) {
            eMail.innerHTML = localStorage.getItem('eMail');
        }
    }

    let formInput = document.querySelector('.form-input');
    let formButton = document.querySelector('#form-hobby__button');
    formButton.onclick = event => {
        event.preventDefault();
        if (formInput.value.match('^[а-яА-ЯёЁa-zA-Z0-9]+$')) {
            hobby.prepend(hobbyElem(formInput.value));
            formInput.value = "";
        }
    }

    const friendsList = document.getElementById('friends-list');
    FRIENDS_DATA.forEach(el => friendsList.innerHTML += friendsListItem(el));
    // For the scrollbar view. Эта мерзка небогоугодная вещь написана для того, чтобы показать красоту скроллбара.
    friendsList.innerHTML += friendsList.innerHTML + friendsList.innerHTML;

}



