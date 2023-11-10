/* exported onEdit01 */
function onEdit01(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  var sheetName = ss.getActiveSheet().getName();
  // const activeCell = sheet.getActiveCell();
  // const value = activeCell.getValue();
  // var column = activeCell.getColumn();
  // var row = activeCell.getRow();
  SpreadsheetApp.flush();

  // var da = [[true], [''], [true], [true], [true], [true], [true], [true], [true], [true]];

  // var net = [[false], [''], [false], [false], [false], [false], [false], [false], [false], [false]];
  Logger.log(sheet.getRange(1, 4).getDisplayValue());
  Logger.log(sheet.getRange(2, 4).getDisplayValue());
  Logger.log(sheet.getRange(3, 4).getDisplayValue());
  Logger.log(sheet.getRange(4, 4).getDisplayValue());
  Logger.log(sheet.getRange(5, 4).getDisplayValue());
  Logger.log(sheet.getRange(6, 4).getDisplayValue());
  Logger.log(sheet.getRange(7, 4).getDisplayValue());
  Logger.log(sheet.getRange(8, 4).getDisplayValue());
  Logger.log(sheet.getRange(9, 4).getDisplayValue());
  Logger.log(sheet.getRange(10, 4).getDisplayValue());

  // Logger.log(sheetName == 'Мой калькулятор')
  // Logger.log(sheet.getRange(7,4).getDisplayValue() =="дом" )
  if (sheetName == 'Мой калькулятор' && sheet.getRange(7, 4).getDisplayValue() == 'дом') {
    Logger.log(sheet.getRange('D13').getValue());
    sheet.getRange(17, 5).setValue('пиписька');
    // sheet.getRange("D18").setValue(sheet.getRange("D14").getValue() )
  }
}
