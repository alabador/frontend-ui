const notifButton = document.querySelector('.notification-button');
const notifContainer = document.querySelector('.notification-container');

notifButton.addEventListener('click', function () {
    if (notifContainer.classList.contains('hide')) {
        notifContainer.classList.remove('hide')
        notifContainer.classList.add('show');
        notifButton.classList.add('active')
    }
    else {
        notifContainer.classList.remove('show')
        notifContainer.classList.add('hide')
        notifButton.classList.remove('active')
    }

})