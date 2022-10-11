const notificationsNumber = document.querySelector(".notifications-number");
const unreadNotifications = document.querySelectorAll(".unread");
const notificationLinks = document.querySelectorAll(".name, .group, .post, .notification-message");
function clearNotifications() {
    notificationsNumber.innerHTML = "0";
    for (let i = 0; i < unreadNotifications.length; i++) {
        unreadNotifications[i].classList.remove("unread");
    };
};
for (let i = 0; i < notificationLinks.length; i++) {
    notificationLinks[i].addEventListener('click', function() {
        notificationLinks[i].closest(".notification-card").classList.remove("unread");
        var unreadNumber = document.querySelectorAll(".unread").length;
        notificationsNumber.innerHTML = unreadNumber;
    }, {once : true});
};