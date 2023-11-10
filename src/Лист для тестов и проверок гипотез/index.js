function onEdit1(e) {
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getActiveSheet();
  var sheetName = ss.getActiveSheet().getName();
  let activeCell = sheet.getActiveCell();
  let value = activeCell.getValue();
  var column = activeCell.getColumn();
  var row = activeCell.getRow();

  Logger.log(sheet.getRange(24, 3, 10, 1).getValues());

  var da = [[true], [''], [true], [true], [true], [true], [true], [true], [true], [true]];

  var net = [[false], [''], [false], [false], [false], [false], [false], [false], [false], [false]];

  Logger.log('da ' + da.length);
  Logger.log('net ' + net.length);
  if (sheetName == 'Лист для тыканья' && column == 3 && row == 22 && value == true) {
    Logger.log('da');
    sheet.getRange(24, 3, 10, 1).setValues(da);
  } else if (sheetName == 'Лист для тыканья' && column == 3 && row == 22 && value == false) {
    sheet.getRange(24, 3, 10, 1).setValues(net);
    Logger.log('net');
  }
}
