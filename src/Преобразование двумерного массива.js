function findElemet() {
  //Консты для настройки
  const sheetIDdata = '126GtwkfPVptr9vKFyVXWgEijS4IVUQ5qN61j8bN6djE';
  const sheetNameData = 'Преобразование двумерного массива';
  //=========================================================Поиск и создание нового массива=========================================================================
  var ssDB = SpreadsheetApp.openById(sheetIDdata);
  var sheetDB = ssDB.getSheetByName(sheetNameData);
  var lastRow1 = sheetDB.getLastRow();
  var arrData = sheetDB.getRange('A2:D' + lastRow1).getValues();
  //Новый массив
  Logger.log(`Кол-во строк в старом массиве : ${arrData.length}`);
  Logger.log(arrData);
  var arrNewData = [];
  for (var n = 0; n < arrData.length; n++) {
    if (arrData[n][3] == 'Что-то 1') {
      arrNewData.push([arrData[n].join()]);
    }
  }
  Logger.log(`Кол-во строк в новом массиве : ${arrNewData.length}`);
  Logger.log(arrNewData);
  Logger.log(`Показать 3й элемент в массиве : ${arrNewData[3][0]}`);
}
