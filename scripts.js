const notificationsNumber = document.querySelector(".notifications-number");
const unreadNotifications = document.querySelectorAll(".unread");
function clearNotifications() {
    notificationsNumber.innerHTML = "0";
    for (let i = 0; i < unreadNotifications.length; i++) {
        unreadNotifications[i].classList.remove("unread");
    }
}