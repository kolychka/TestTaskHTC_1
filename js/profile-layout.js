const profileInteractionElem = () => `<img src="images/${PROFILE_DATA.img}" alt="Фотография пользователя: ${PROFILE_DATA.username}" class="profile__photo photo">
                                    <button class="button profile__button">Добавить в друзья</button>`;

const profileInformationElem = () => `<label class="profile__username">${PROFILE_DATA.username}</label>
                                    <label class="profile_color_gray">${PROFILE_DATA.hometown}</label>`;

const profilePersonalDataElem = () => `<section class="main-section">
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
        <div id="hobby" class="hobby"></div>
        <form id="form-hobby">
            <label><input type="text" class="form-input form-input_size interest"></label>
            <button id="form-hobby__button" class="button profile__button" type="submit">Добавить интерес</button>
        </form>`;

const hobbyElem = elem => `<button class="button interest">${elem}</button>`;