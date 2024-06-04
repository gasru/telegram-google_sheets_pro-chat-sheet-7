/* exported userActionFormatSheet */
function userActionFormatSheet() {
  formatSheet_();
}

/* exported formatSection_ */
function formatSection_(sheet, section) {
  sheet.getRange(section.start + 1, 1, section.end - section.start + 1, 1).setBackground(section.color);
  sheet.getRange(`${section.start + 1}:${section.start + 1}`).merge();
}

/* exported formatSheet_ */
function formatSheet_() {
  const settings = [
    { name: 'Вася', color: '#FFD700' },
    { name: 'Петя', color: '#00FF00' },
    { name: 'Коля', color: '#4169E1' },
  ];

  const sheet = SpreadsheetApp.getActive().getSheetByName('Объединение ячеек с помощью скрипта');

  const dataRange = sheet.getDataRange();

  const values = dataRange.getValues();

  dataRange.getMergedRanges().forEach((range) => range.breakApart());

  sheet
    .getRange(2, 1, sheet.getMaxRows() - 1, sheet.getMaxColumns())
    .setBackground('white')
    .setBorder(false, false, false, false, false, false);

  sheet
    .getRange(2, 1, sheet.getLastRow() - 1, sheet.getMaxColumns())
    .setBorder(true, true, true, true, true, true, 'black', SpreadsheetApp.BorderStyle.SOLID);

  const headerRange = sheet.getRange('A2:Z2');
  headerRange.setBackground('white').setFontWeight('bold').setFontSize(11).setFontColor('black');

  let current = {};

  values.forEach((row, i, arr) => {
    const name = row[0];
    const currentItem = settings.find((item) => item.name === name);
    if (currentItem) {
      current.end = i - 1;
      if (current.start) {
        formatSection_(sheet, current);
        current = {};
      }
      current.start = i;
      current.color = currentItem.color;
    } else if (arr.length - 1 === i && current.start) {
      current.end = i;
      formatSection_(sheet, current);
    }
  });
}
