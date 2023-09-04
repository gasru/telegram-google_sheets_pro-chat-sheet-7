/* exported onOpen */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Таблица чата')
    .addItem('Скрыть строки', 'userActionHideRowsViaAPI')
    .addItem('Отобразить строки', 'userActionShowRowsViaAPI')
    .addToUi();
}
