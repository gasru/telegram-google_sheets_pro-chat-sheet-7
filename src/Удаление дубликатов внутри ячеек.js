function userActionClenaCells() {
  const sheet = SpreadsheetApp.getActiveSheet();
  if (sheet.getName() !== 'Удаление дубликатов внутри ячеек') return;
  const range = sheet.getRange('H:H');
  range.setValues(
    range.getValues().map((row) =>
      row.map((cell) =>
        String(cell)
          .split(/\n/g)
          .filter((v, i, a) => a.indexOf(v) === i)
          .join('\n'),
      ),
    ),
  );
}
