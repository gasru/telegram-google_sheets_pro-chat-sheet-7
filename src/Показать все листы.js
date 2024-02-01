function userActionShowAllHiddenSheets() {
  SpreadsheetApp.getActive()
    .getSheets()
    .forEach((sh) => sh.showSheet());
}

function userActionShowAllHiddenSheetsAdvanced() {
  const id = SpreadsheetApp.getActiveSpreadsheet().getId();
  const hiddenSheets = Sheets.Spreadsheets.get(id, {
    fields: 'sheets(properties(sheetId,title,hidden))',
  }).sheets.filter((sheet) => sheet.properties.hidden);

  if (!hiddenSheets.length) {
    return;
  }

  const requests = hiddenSheets.map((sheet) => {
    return {
      updateSheetProperties: {
        properties: {
          sheetId: sheet.properties.sheetId,
          hidden: false,
        },
        fields: 'hidden',
      },
    };
  });
  return Sheets.Spreadsheets.batchUpdate(
    {
      requests,
    },
    id,
  );
}

function userActionHideAllSheetsAdvanced() {
  const id = SpreadsheetApp.getActiveSpreadsheet().getId();
  const hiddenSheets = Sheets.Spreadsheets.get(id, {
    fields: 'sheets(properties(sheetId,title,hidden))',
  }).sheets.filter((sheet) => sheet.properties.title !== 'О Таблице' && !sheet.properties.hidden);

  if (!hiddenSheets.length) {
    return;
  }

  const requests = hiddenSheets.map((sheet) => {
    return {
      updateSheetProperties: {
        properties: {
          sheetId: sheet.properties.sheetId,
          hidden: true,
        },
        fields: 'hidden',
      },
    };
  });
  return Sheets.Spreadsheets.batchUpdate(
    {
      requests,
    },
    id,
  );
}
