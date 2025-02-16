
    // Массив с примерными трек-номерами
    const validTrackNumbers = [];

    // Добавляем обработчик на кнопку
    document.getElementById('check-button').addEventListener('click', function () {
      const trackNumber = document.getElementById('track-number').value.trim(); // Получаем введённый номер
      const result = document.getElementById('result'); // Элемент для вывода результата

      if (!trackNumber) { // Если поле пустое
        result.textContent = 'Трек номератонро нависед!';
        result.style.color = 'red';
        return;
      }

      // Проверяем, есть ли трек-номер в списке
      if (validTrackNumbers.includes(trackNumber)) {
        result.textContent = `Қабул ${trackNumber} шудааст!`; // Используем обратные кавычки
        result.style.color = 'orange';
      } else {
        result.textContent = 'Трек-номери шумо нест!';
        result.style.color = 'orange';
      }
    });
  
