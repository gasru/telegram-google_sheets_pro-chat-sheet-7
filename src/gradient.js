function makeGradient() {
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getSheetByName('Новый лист для вашего примера');
  var diap2 = sheet.getRange(1, sheet.getLastColumn(), sheet.getLastRow(), 1).getBackgrounds();
  var rules = sheet.getConditionalFormatRules();
  Logger.log(diap2);
  diap2.forEach(function (item, index) {
    if (item == '#f6b26b') {
      var start = index + 2;
      var end = 0;
      for (let i = 1; i < diap2.length; i++) {
        if (diap2[index + i] != '#f1c232') {
          end = index + i + 1;
          // Logger.log(index+i)
        } else {
          break;
        }
      }

      // Logger.log(sheet.getRange(start, sheet.getLastColumn(), (end - start) + 1, 1).getA1Notation())
      gradient = sheet.getRange(start, sheet.getLastColumn(), end - start + 1, 1);
      var rule = SpreadsheetApp.newConditionalFormatRule()
        .setRanges([gradient])
        .setGradientMinpoint('#FF9900')
        .setGradientMidpointWithValue('#FFD666', SpreadsheetApp.InterpolationType.PERCENTILE, '50')
        .setGradientMaxpoint('#00FF00')
        .build();
      rules.push(rule);
    }
  });
  rules.forEach((r) => {
    r.getRanges().forEach((range) => {
      console.log(range.getA1Notation());
    });
  });
  sheet.setConditionalFormatRules(rules);
}
