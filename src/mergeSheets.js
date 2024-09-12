function getData() {
  const table = SpreadsheetApp.getActive();
  const tableId = table.getId();
  const sheetName = 'смета2';
  const response = Sheets.Spreadsheets.getByDataFilter(
    {
      dataFilters: [
        {
          a1Range: `'${sheetName}'!A1:K`,
        },
      ],
      includeGridData: true,
    },
    tableId,
  );
  
  const sheet = response.sheets.find((s) => s.properties.title == sheetName);
  console.log(JSON.stringify(sheet.properties, null, 2));
  console.log('columns::', sheet.data[0].rowData[0].length);
  console.log('rows::', sheet.data[0].rowData.values.length);

  const req = {
    copyPaste: {
      source: {
        sheetId: sheet.properties.sheetId,
        startRowIndex: 0,
        startColumnIndex: 0,
        endRowIndex: 50,
        endColumnIndex: 11,
      },
      destination: {
        sheetId: 1649763780,
        startColumnIndex: 0,
        startRowIndex: 220,
        endColumnIndex: 11,
        endRowIndex: 270,
      },
      // pasteType: 'PASTE_NORMAL',
      // pasteOrientation: 'NORMAL'
    },
  };

  Sheets.Spreadsheets.batchUpdate(
    {
      requests: [req],
    },
    tableId,
  );
}
