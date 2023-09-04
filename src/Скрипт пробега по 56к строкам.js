/* exported clearGlobalminus2 */
function clearGlobalminus2() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var allKeys = ss.getActiveSheet();

  var diapason = allKeys.getRange(1, 1, allKeys.getLastRow(), 1).getValues();

  var glsKey = allKeys.getRange(9, 5, allKeys.getLastRow(), 1).getValues();
  var itog = [];

  for (var g = 9; g < diapason.length; g++) {
    // Logger.log("берем строку "+ g)

    for (var e = 0; e < glsKey.length; e++) {
      var kd = glsKey[e];
      // Logger.log("берем значение "+ kd+ "сравниваем его с "+diapason[g][0]+ " для него значение суммы  "+lastCol[g] )

      if (diapason[g] == kd[0]) {
        //  Logger.log("найдено слово в глобале "+diapason[g][0])
        itog.push(diapason[g][0]);
        break;
      }
    }
  }

  Logger.log(itog);
  Logger.log(itog.length);
}

/* exported globalMinus2 */
function globalMinus2() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('56k побежали');
  const dict = new Map();
  const itog = [];
  sheet
    .getRange(10, 5, sheet.getLastRow(), 1)
    .getValues()
    .forEach((row) => {
      if (row[0]) {
        dict.set(row[0].toString(), true);
      }
    });
  sheet
    .getRange(10, 1, sheet.getLastRow(), 2)
    .getValues()
    .forEach((row) => {
      if (row[0] && dict.get(row[0].toString())) {
        itog.push([row[0]]);
      } else {
        if (row[1]) {
          console.log(row[0]);
        }
      }
    });
}
