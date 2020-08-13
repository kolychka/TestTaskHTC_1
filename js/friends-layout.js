const friendsListItem = el => `<div class="friends-list-item">
        <img src="images/${el.img}" alt="Фотография пользователя: ${el.name}" class="friends-list-item__photo">
        <a class="friends-list-item__name link">${el.name}</a>
        <div class="friends-list-item__hometown">${el.hometown}</div>
        <div class="friends-list-item__status">${el.status}</div>
    </div>`;