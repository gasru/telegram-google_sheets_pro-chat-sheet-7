/* exported onEdit123321 */
function onEdit123321(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Чекбокс (копия)');
  var inputCol = sheet.getRange('A1');
  var myRange = inputCol;
  var row = e.range.getRow();
  let row2 = undefined;
  var col = e.range.getColumn();

  if (col == myRange.getColumn()) {
    const codeCell = sheet.getRange('A' + row);
    var dann = codeCell.getValue();

    // //////////////////////////////////////////////////////
    if (dann == 'Дети (0 - 14 лет)') {
      row2 = 'B' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'C' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'D' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'E' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'F' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'G' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'H' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'I' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'J' + row;
      sheet.getRange(row2).setValue('FALSE');
    }
    // ////////////////////////////////////////////////////////////
    if (dann == 'Подростки (14 - 18 лет)') {
      row2 = 'B' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'C' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'D' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'E' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'F' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'G' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'H' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'I' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'J' + row;
      sheet.getRange(row2).setValue('FALSE');
    }
    // ////////////////////////////////////////////////////////////
    if (dann == 'Дети и Подростки (0 - 18 лет)') {
      row2 = 'B' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'C' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'D' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'E' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'F' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'G' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'H' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'I' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'J' + row;
      sheet.getRange(row2).setValue('FALSE');
    }
    // ////////////////////////////////////////////////////////////
    if (dann == 'Молодежь (18 - 35 лет)') {
      row2 = 'B' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'C' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'D' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'E' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'F' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'G' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'H' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'I' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'J' + row;
      sheet.getRange(row2).setValue('FALSE');
    }
    // ////////////////////////////////////////////////////////////
    if (dann == 'Дети и Молодежь (0 - 35)') {
      row2 = 'B' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'C' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'D' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'E' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'F' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'G' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'H' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'I' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'J' + row;
      sheet.getRange(row2).setValue('FALSE');
    }
    // ////////////////////////////////////////////////////////////
    if (dann == 'Подростки и молодежь (14 - 35 лет)') {
      row2 = 'B' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'C' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'D' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'E' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'F' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'G' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'H' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'I' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'J' + row;
      sheet.getRange(row2).setValue('FALSE');
    }
    // ////////////////////////////////////////////////////////////
    if (dann == 'Взрослые (35 - 60 лет)') {
      row2 = 'B' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'C' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'D' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'E' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'F' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'G' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'H' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'I' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'J' + row;
      sheet.getRange(row2).setValue('TRUE');
    }
    // ////////////////////////////////////////////////////////////
    if (dann == 'Пенсионеры (60+)') {
      row2 = 'B' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'C' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'D' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'E' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'F' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'G' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'H' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'I' + row;
      sheet.getRange(row2).setValue('FALSE');
      row2 = 'J' + row;
      sheet.getRange(row2).setValue('TRUE');
    }
    // ////////////////////////////////////////////////////////////
    if (dann == 'Все возраста (0 - 60+)') {
      row2 = 'B' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'C' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'D' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'E' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'F' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'G' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'H' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'I' + row;
      sheet.getRange(row2).setValue('TRUE');
      row2 = 'J' + row;
      sheet.getRange(row2).setValue('TRUE');
    }
    // ////////////////////////////////////////////////////////////
    // spreadsheet.getRange('M2').uncheck()
  }
}
