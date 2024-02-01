function COUNTCOLOR(countRange, colorRef) {
  try {
    var activeRange = SpreadsheetApp.getActiveRange();
    var activeSheet = SpreadsheetApp.getActiveSheet();
    var activeformula = activeRange.getFormula();
    var countRangeAddress = activeformula
      .match(/\((.*)\;./)
      .pop()
      .trim();
    var backGrounds = activeSheet.getRange(countRangeAddress).getBackgrounds();
    var colorRefAddress = activeformula
      .match(/;(.*)\)/)
      .pop()
      .trim();
    var backGround = activeSheet.getRange(colorRefAddress).getBackground();

    var countColorCells = 0;

    for (var i = 0; i < backGrounds.length; i++) {
      for (var k = 0; k < backGrounds[i].length; k++) {
        if (backGrounds[i][k] == backGround) {
          countColorCells = countColorCells + 1;
        }
      }
    }
    return countColorCells;
  } catch (error) {
    return error;
  }
}
