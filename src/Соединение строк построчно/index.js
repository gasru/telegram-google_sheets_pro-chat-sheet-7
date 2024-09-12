/* exported combineCells */
/**
 * Combines strings from two cells in a row into a single cell.
 * The combined string is bolded if the first cell is not empty.
 */
function combineCells() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName('Соединение строк построчно');
  const dataRange = sheet.getDataRange();
  const values = dataRange.getValues();

  const newValues = values.map((row) => {
    const cellA = row[0];
    const cellB = row[1];

    let formattedText = null;
    if (String(cellA).length > 0) {
      formattedText = SpreadsheetApp.newRichTextValue()
        .setText(String(cellA) + ' ' + String(cellB))
        .setTextStyle(0, String(cellA).length, SpreadsheetApp.newTextStyle().setBold(true).build());
    } else {
      formattedText = SpreadsheetApp.newRichTextValue().setText(String(cellB));
    }

    return [formattedText?.build()];
  });

  const targetRange = dataRange.offset(0, 2, dataRange.getNumRows(), 1);
  targetRange.setRichTextValues(newValues);
}

function mergeColumnsWithBoldA() {
  // Получаем активный лист
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Соединение строк построчно');

  // Получаем данные из колонок A и B
  var rangeA = sheet.getRange('A1:A' + sheet.getLastRow());
  var rangeB = sheet.getRange('B1:B' + sheet.getLastRow());

  var valuesA = rangeA.getValues();
  var valuesB = rangeB.getValues();

  // Записываем объединенные значения с форматированием в колонку C
  for (var i = 0; i < valuesA.length; i++) {
    // Объединяем жирный текст из колонки A с обычным текстом из колонки B
    var combinedText = SpreadsheetApp.newRichTextValue()
      .setText(valuesA[i][0] + ' ' + valuesB[i][0])
      .setTextStyle(0, valuesA[i][0].length, SpreadsheetApp.newTextStyle().setBold(true).build())
      .build();

    // Вставляем результат в колонку C
    sheet.getRange(i + 1, 3).setRichTextValue(combinedText);
  }
}
