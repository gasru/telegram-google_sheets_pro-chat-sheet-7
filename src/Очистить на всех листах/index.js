function cleanOnAllSheets() {
  SpreadsheetApp.getActive()
    .getSheets()
    .forEach((sheet) => {
      const range = sheet.getRange('D:D');
      range.createTextFinder('\\n+').useRegularExpression(true).replaceAllWith(' ');
      range.createTextFinder('^\\s+|\\s+$').useRegularExpression(true).replaceAllWith('');
      range.createTextFinder('\\s+').useRegularExpression(true).replaceAllWith(' ');
    });
}
