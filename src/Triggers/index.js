/* global */

/* exported onOpen */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Таблица чата')
    .addItem('Нажми меня', userActionHiMessage.name)
    .addItem('Показать все скрытые листы', userActionShowAllHiddenSheets.name)
    .addItem('Показать все скрытые листы Advanced', userActionShowAllHiddenSheetsAdvanced.name)
    .addItem('Скрыть все листы', userActionHideAllSheetsAdvanced.name)
    .addSubMenu(
      SpreadsheetApp.getUi().createMenu('Примеры и вопросы').addItem('Копирование строк', userActionSample.name),
    )
    .addToUi();
}

/* exported userAvtionHiMessage */
function userActionHiMessage() {
  const message = `
<style>
  * {
    font-family: Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
  }
</style>
<h2>Добро пожаловать в Таблицу чата!</h2>
<div>
  <p>Чтобы создать новый лист, выберите любой незаблокированный, поттом передите в меню</p>
  <p>Вы можете добавлять код Apps Script при необходимости</p>
</div>
<div>
  <p>
    <a href="https://t.me/+pLLUBtcXIqY0MGMy" target="_blank">Наш чат</a> и 
    <a href="https://t.me/+lmannExYEyg5OTZi" target="_blank">наш канал</a>
  </p>
</div>
`;

  SpreadsheetApp.getUi().showModalDialog(HtmlService.createHtmlOutput(message), 'Приветствие');
}

function userActionSample() {
  SpreadsheetApp.getActive().toast('Место для вашего примера');
}
