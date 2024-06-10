/* exported userActionPrintCellA1Nota */
function userActionPrintCellA1Nota() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Получение адреса ячейки');

  var range = sheet.getRange(1, 1, 24, 6);
  var values = range.getValues();

  for (var row in values) {
    let breaken = false;
    for (var col in values[row]) {
      const val = values[row][col];
      if (val === 63) {
        console.log('By base26ABCfrom10', getA1NotaByCoords1_(+row + 1, +col + 1));
        console.log('By getA1Notation', getA1NotaByCoords2_(sheet, +row + 1, +col + 1));
        breaken = true;
        break;
      }
    }
    if (breaken) break;
  }
}

function getA1NotaByCoords1_(row, col) {
  return `${base26ABCfrom10_(col)}${row}`;
}

function getA1NotaByCoords2_(sheet, row, col) {
  return sheet.getRange(row, col).getA1Notation();
}

function base26ABCfrom10_(number) {
  let num = number;
  let sfx = '';
  while (num > 0) {
    const cd = (num - 1) % 26;
    sfx = String.fromCharCode(65 + cd) + sfx;
    num = Math.floor((num - cd) / 26);
  }
  return sfx;
}
