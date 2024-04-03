const notifContainer = document.querySelector('.notifContainer');
const buttons = document.querySelectorAll('.button'); // Tüm butonları seçmek için sınıf kullanılıyor.

const notifications = [
  'Sepete Eklendi',
  'Sepete Eklendi',
  'Sepete Eklendi',
  'Sepete Eklendi',
  'Sepete Eklendi',
  'Sepete Eklendi',
];

const colors = ['red', 'black', 'green', 'blue', 'gray', 'orange', 'purple'];

buttons.forEach(button => {
  button.addEventListener('click', createNotification);
});

function createNotification() {
  const notif = document.createElement('div');
  notif.classList.add('notif');
  notif.classList.add(getRandomColor());

  notif.innerText = getRandomNotif();

  notifContainer.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomNotif() {
  return notifications[Math.floor(Math.random() * notifications.length)];
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
