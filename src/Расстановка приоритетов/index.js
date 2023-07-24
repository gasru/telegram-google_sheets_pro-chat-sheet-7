function triggerOnOpenSetPrioritets(e) {
  const range = SpreadsheetApp.getActive().getRange('Расстановка приоритетов!D2');
  triggerOnEditSetPrioritets({ range });
}

/**
 * @param {{range:GoogleAppsScript.Spreadsheet.Range}} e
 */
function triggerOnEditSetPrioritets(e) {
  const sheet = e.range.getSheet();
  if (sheet.getName() !== 'Расстановка приоритетов') return;
  if (![2, 4].includes(e.range.getColumn())) return;
  const rank = sheet.getRange('D2:D');
  const rankVals = rank.getValues().map((_) => _[0]);
  const opt = sheet
    .getRange('B2:B501')
    .getValues()
    .map((_) => _[0])
    .filter((item) => rankVals.indexOf(item) === -1);
  const rule0 = SpreadsheetApp.newDataValidation()
    .requireValueInList(opt)
    .setAllowInvalid(false)
    .setHelpText('Поддерживаем уникальность приоритета')
    .build();
  const rules = rankVals.map((v) => {
    if (v !== '') {
      const remaining = [...opt];
      remaining.unshift(v);
      return [
        SpreadsheetApp.newDataValidation()
          .requireValueInList(remaining)
          .setAllowInvalid(false)
          .setHelpText('Поддерживаем уникальность приоритета')
          .build()
      ];
    }
    return [rule0];
  });
  rank.setDataValidations(rules);
  SpreadsheetApp.getActive().toast('OK');
}
