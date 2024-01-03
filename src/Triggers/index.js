/* global */

/* exported onOpen */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Таблица чата')
    .addItem('Нажми меня', userActionHiMessage.name)
    .addSubMenu(
      SpreadsheetApp.getUi().createMenu('Примеры и вопросы').addItem('Копирование строк', userActionSample.name),
    )
    .addToUi();
}

/* exported userAvtionHiMessage */
function userActionHiMessage() {
  const message = ```
Чтобы создать новый лист, выберите любой незаблокированный, поттом передите в меню

Вы можете добавлять код Apps Script при необходимости
  ```;

  SpreadsheetApp.getUi().showModalDialog(HtmlService.createHtmlOutput(message), 'Приветствие');
}

function userActionSample() {
  SpreadsheetApp.getActive().toast('Место для вашего примера');
}
