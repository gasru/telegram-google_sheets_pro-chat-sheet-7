function getWarehouseId(apiKey) {
  var apiUrl = 'https://marketplace-api.wildberries.ru/api/v3/warehouses';

  var options = {
    method: 'get', // Используем GET-метод
    headers: {
      Authorization: '', // Вставьте ваш API-ключ
      'Content-Type': 'application/json',
      Accept: 'application/json', // Добавляем заголовок Accept
    },
    muteHttpExceptions: true, // МUTE исключения для получения полного ответа
  };

  try {
    // Выполнение запроса
    Logger.log('Отправка запроса на URL: ' + apiUrl);
    var response = UrlFetchApp.fetch(apiUrl, options);

    // Логируем ответ от сервера для отладки
    Logger.log('Response code: ' + response.getResponseCode());
    Logger.log('Response headers: ' + JSON.stringify(response.getAllHeaders()));
    Logger.log('Response body: ' + response.getContentText()); // Выводим полный ответ

    // Если запрос успешен, получаем список складов
    if (response.getResponseCode() == 200) {
      var jsonResponse = JSON.parse(response.getContentText());

      // Проверка наличия данных о складах
      if (jsonResponse && jsonResponse.length > 0) {
        var warehouseId = jsonResponse[0].id; // Используем ID первого склада
        Logger.log('Найден склад с ID: ' + warehouseId);
        return warehouseId;
      } else {
        Logger.log('Склады не найдены в ответе.');
        return null;
      }
    } else {
      Logger.log('Ошибка запроса: ' + response.getResponseCode() + ' - ' + response.getContentText());
      return null;
    }
  } catch (e) {
    Logger.log('Ошибка: ' + e.message);
    return null;
  }
}

/* exported getStockByWarehouse */
function getStockByWarehouse(apiKey) {
  var warehouseId = getWarehouseId(apiKey);

  if (warehouseId === null) {
    Logger.log('Не удалось получить ID склада.');
    return;
  }

  // Формируем URL для запроса на остатки
  var apiUrl = 'https://marketplace-api.wildberries.ru/api/v3/stocks/' + warehouseId;

  // Убедимся, что API-ключ правильно передан
  Logger.log('Используем API-ключ: ' + apiKey);

  var options = {
    method: 'post', // Используем POST метод
    headers: {
      Authorization: apiKey, // Убедимся, что передаем с "Bearer"
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    muteHttpExceptions: false, // Оставим для лучшего логирования ошибок
    payload: JSON.stringify({
      warehouseId: warehouseId, // Передаем warehouseId в теле запроса
    }),
  };

  try {
    Logger.log('Отправка запроса на остатки на складе с ID: ' + warehouseId);

    // Получаем ответ от сервера
    var response = UrlFetchApp.fetch(apiUrl, options);

    // Логируем ответ для диагностики
    Logger.log('Response code: ' + response.getResponseCode());
    Logger.log('Response headers: ' + JSON.stringify(response.getAllHeaders()));
    Logger.log('Response body: ' + response.getContentText());

    if (response.getResponseCode() === 200) {
      var responseBody = response.getContentText();
      Logger.log('Response body: ' + responseBody);

      var jsonResponse = JSON.parse(responseBody);

      if (jsonResponse && jsonResponse.length > 0) {
        Logger.log('Остатки по складу: ' + JSON.stringify(jsonResponse));
        return jsonResponse;
      } else {
        Logger.log('Нет остатков по данному складу.');
        return null;
      }
    } else {
      Logger.log('Ошибка запроса на остатки: ' + response.getResponseCode() + ' - ' + response.getContentText());
      return null;
    }
  } catch (e) {
    Logger.log('Ошибка: ' + e.message);
    return null;
  }
}
