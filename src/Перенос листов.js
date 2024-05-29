function importSheets(sheetName) {
  var origin = SpreadsheetApp.openById('193Dbro4_sHjRMy_tqbIkGK8AaUjfsBwHVS5MwNqqvmM').getSheetByName(sheetName);
  var result = SpreadsheetApp.openById('1fd9wSR9iFqNKHrDPbgOL1_7k1ViGickZjqJWt4179CU');

  if (result.getSheetByName(sheetName)) {
    result.deleteSheet(result.getSheetByName(sheetName));
  }

  origin.copyTo(result).setName(origin.getName());
  // var displaydata = result.getSheetByName(sheetName).getRange(1, 3, result.getSheetByName(sheetName).getMaxRows(), 26).getDisplayValues()
  // result.getSheetByName(sheetName).getRange(1, 3, result.getSheetByName(sheetName).getMaxRows(), 26).setValues(displaydata)

  // result.getSheetByName(sheetName).deleteColumns(28, result.getSheetByName(sheetName).getMaxColumns() - 27)
  // result.getSheetByName(sheetName).deleteColumns(13, 11)
  // result.getSheetByName(sheetName).deleteColumns(5, 6)
  // result.getSheetByName(sheetName).deleteColumns(3, 1)

  // result.getSheetByName(sheetName).getRange(3, 9).setValue("=ArrayFormula(IF(E3:E*H3:H=0;\"\  \";E3:E*H3:H))")
  // .setValue("=ArrayFormula(E3:E*H3:H)")
  // result.getSheetByName(sheetName).getRange(2, 9).setValue("=SUM(I3:I)")
  // .setValue("=ArrayFormula(ЕСЛИ(E3:E*H3:H=0;\"\  \";E3:E*H3:H))")
}

/* exported getListofSheet */
function getListofSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  // var listWithSheetsNames = []; // или куда вам нужно выводить список листов. 0 - добавляет лист на первое место
  for (var i = 1; i < ss.getNumSheets(); i++) {
    // если используете другой способ вывода - замените i = 0
    Logger.log(ss.getSheets()[i].getSheetName());
    importSheets(ss.getSheets()[i].getSheetName());

    // listWithSheetsNames.push(ss.getSheets()[i].getSheetName());
  }
  // Logger.log(listWithSheetsNames);
  // listWithSheetsNames.forEach((x) => {importSheets(x)})
}
