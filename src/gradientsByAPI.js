function makeGradientbyAPI() {
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  var diap1 = sheet.getRange(1, sheet.getLastColumn(), sheet.getLastRow(), 1).getValues();
  var diap2 = sheet.getRange(1, sheet.getLastColumn(), sheet.getLastRow(), 1).getBackgrounds();
  // Logger.log(diap2)
  var color = sheet.getRange(1, sheet.getLastColumn()).getBackgrounds();
  var week = sheet.getRange(1, sheet.getLastColumn()).getValue();
  var diapazon = [];

  diap2.forEach(function (item, index) {
    if (item[0] == color[0][0] && diap1[index] == week) {
      var start = index + 2;
      var end = 0;
      for (let i = 1; i < diap2.length; i++) {
        if (diap2[index + i] != color[0][0]) {
          end = index + i + 1;
          // Logger.log(index+i)
        } else {
          break;
        }
      }

      // Logger.log(sheet.getRange(start, sheet.getLastColumn(), (end - start) + 1, 1).getA1Notation())

      diapazon.push([start, end, sheet.getLastColumn() - 1]);
    }
  });

  // Logger.log(diapazon);
  var gradientreq = gradientRequests(diapazon, spreadsheet.getId());
  // Logger.log(gradientreq)
  /*
       const result = Sheets.Spreadsheets.batchUpdate({
        requests: gradientreq,
        responseIncludeGridData: true
    },
        spreadsheet.getId()
    )
    */
}

function gradientRequests(diapazon, sheetId) {
  for (const rowNumber of diapazon) {
    const request = {
      requests: [
        {
          addConditionalFormatRule: {
            rule: {
              gradientRule: {
                maxpoint: {
                  type: 'MAX',
                  color: { red: 6 / 255, green: 255 / 255, blue: 0 },
                },
                midpoint: {
                  type: 'PERCENTILE',
                  value: '50',
                  color: { red: 255 / 255, green: 239 / 255, blue: 0 },
                },
                minpoint: {
                  type: 'MIN',
                  color: { red: 255 / 255, green: 0, blue: 0 },
                },
              },
              ranges: [
                {
                  sheetId: sheetId,
                  startRowIndex: rowNumber[0],
                  endRowIndex: rowNumber[1],
                  startColumnIndex: rowNumber[2],
                  endColumnIndex: rowNumber[2],
                },
              ],
            },
            index: 0,
          },
        },
      ],
    };
    // Sheets.Spreadsheets.batchUpdate(request, spreadsheet.)
  }
}
