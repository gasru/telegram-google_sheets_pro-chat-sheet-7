// Код не мой. Другого у меня для вас нету
function triggerOnEditDependenceLists(e) {
  // var ss = SpreadsheetApp.getActiveSpreadsheet(); // Получаем активную таблицу
  var workSheet = e.range.getSheet();
  if (workSheet.getName() !== 'Зависимые списки') return;
  //  .getSheetByName(); // Получаем имя листа где будут списки (в рабочей таблице заменить на нужное имя листа текст в кавычках - 'Лист1')
  var dataSheet = e.source.getSheetByName('Зависимые списки. Справочник'); // Получаем имя листа справочника (в рабочей таблице нужно будет заменить название листа)
  var acCell = workSheet.getActiveCell(); // Получаем активную ячейку листа где будут списки.
  var val1 = acCell.getValue(); // Получаем значение активной ячейки.

  if (val1 === '') {
    acCell.offset(0, 1).clearContent().clearDataValidations(); // Если удаляем значение из активной ячейки (первый список) - будет удален второй список и очищена ячейка
    return;
  }

  var lRow = dataSheet.getLastRow(); // Получаем последнюю заполненную строку на листе справочнике
  var lColumn = dataSheet.getLastColumn(); // Получаем последний заполненный столбец на листе справочнике
  var indexCol = dataSheet.getRange(1, 1, 1, lColumn).getValues()[0].indexOf(val1) + 1; // Получаем индекс колонки, для зависимого списка
  var range = dataSheet.getRange(2, indexCol, lRow, 1); // Получаем правильный диапазон для зависимого списка
  var validation = SpreadsheetApp.newDataValidation().requireValueInRange(range).build(); // Получаем нужные значения

  acCell.offset(0, 1).clearContent().clearDataValidations(); // Очищаем поле перед созданием проверки данных

  if (acCell.getColumn() !== 1) {
    return;
  } // Если активная ячейка не в 1 столбце - прерываем выполнение скрипта

  acCell.offset(0, 1).setDataValidation(validation); // Вставляем проверку данных.
}
