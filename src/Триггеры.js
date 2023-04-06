/* exported onOpen */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('👷‍♂️ Инструменты этой Таблицы чата')
    .addItem('▶️ Запустить поверку активного Листа', 'userActionRunBenchmarkCurrentSheet')
    .addItem('▶️ Создать копию активного листа и скопировать защиту', 'userActionCopySheetAndProtections')
    .addToUi();
}
