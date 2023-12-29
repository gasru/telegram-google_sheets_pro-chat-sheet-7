/* global runCopyData runMoveData */

/* exported onOpen */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Таблица чата')
    .addItem('Нажми меня', userAvtionHiMessage.name)
    .addSubMenu(
      SpreadsheetApp.getUi()
        .createMenu('Перенос или копирование строк')
        .addItem('Копирование строк', runCopyData.name)
        .addItem('Перенос строк', runMoveData.name),
    )
    .addToUi();
}

/* exported userAvtionHiMessage */
function userAvtionHiMessage() {
  const message = ```
Чтобы создать новый лист, выберите любой незаблокированный, поттом передите в меню

Вы можете добавлять код Apps Script при необходимости
  ```;

  SpreadsheetApp.getUi().showModalDialog(HtmlService.createHtmlOutput(message), 'Приветствие');
}
