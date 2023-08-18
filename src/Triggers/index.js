function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Таблица чата')
    .addSubMenu(
      SpreadsheetApp.getUi()
        .createMenu('Скрытие строк и колонк через API')
        .addItem('Скрыть строки', 'userActionHideRowsViaAPI')
        .addItem('Отобразить строки', 'userActionShowRowsViaAPI')
    )
    .addToUi();
}
