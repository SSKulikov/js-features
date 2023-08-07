// Получаем элемент с таймером
var timer = document.getElementById('timer');

// Устанавливаем начальное значение таймера в секундах
var seconds = 60;

// Функция, которая будет вызываться каждую секунду
function countdown() {
  // Вычисляем минуты и секунды
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = seconds % 60;

  // Добавляем нули перед минутами и секундами, если они меньше 10
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (remainingSeconds < 10) {
    remainingSeconds = "0" + remainingSeconds;
  }

  // Обновляем текст на странице
  timer.innerHTML = minutes + ":" + remainingSeconds;

  // Уменьшаем значение таймера на 1 секунду
  seconds--;

  // Если время вышло, выводим сообщение об окончании отсчета и запускаем загрузку файла
  if (seconds < 0) {
    clearInterval(interval);
    alert("Вы победили в конкурсе!");
    var link = document.createElement('a');
    link.href = 'http://hello.kitty/'; 
    link.download = 'file.txt';
    link.target = '_blank';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
  }
}

// Запускаем таймер
var interval = setInterval(countdown, 1000);