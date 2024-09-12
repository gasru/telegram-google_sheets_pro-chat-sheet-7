// Функция для открытия HTML-формы
function openSearchForm() {
  var html = HtmlService.createHtmlOutputFromFile('searchForm').setWidth(1000).setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(html, 'Поиск в справочнике');
}

// Функция для получения данных из справочника
function getDataFromSpreadsheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Справочник');
  var data = sheet.getRange('A1:A').getValues();

  // Преобразуем массив в одномерный
  return data.flat().filter(function (entry) {
    return entry !== '';
  });
}

// Функция для записи выбранного элемента в ячейку
function setSelectedValue(value) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Вставляем выбранное значение в ячейку B1
  sheet.getRange('B1').setValue(value);
}


// asdfsadf