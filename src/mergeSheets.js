function triggerOnEdit(e) {
  // function onEdit(e) {
  let wb = SpreadsheetApp.getActive().getSheetByName('Get-Запрос'); //вот здесь нужно поменять название листа
  var sheet = e.range.getSheet();

  // Проверка, что изменения происходят на листе "1979"
  if (sheet.getName() === 'Get-Запрос') {
    //вот здесь нужно поменять название листа
    var range = e.range;
    // Проверка, что изменение произошло в колонке 6 (например, выпадающее меню в колонке F)
    if (range.getColumn() == 5) {
      //вот тут нужно поменять номер столбца со списком
      var newValue = range.getValue();
      // Если выбрано значение "Archive"
      if (newValue === 'Archive') {
        var valueA = sheet.getRange(range.getRow(), 1).getValue(); // Значение из колонки A текущей строки
        var valueE = sheet.getRange(range.getRow(), 5).getValue(); // Значение из колонки E текущей строки

        // Вывод значений valueA и valueE на экран
        var ui = SpreadsheetApp.getUi();
        //var response = ui.alert('Архивация', 'Значение из A: ' + valueA + '\nЗначение из E: ' + valueE, ui.ButtonSet.YES_NO);

        // Логирование значений в консоль
        console.log('Значение в колонке A:', valueA);
        console.log('Значение в колонке E:', valueE);
        wb.getRange('I2').setValue(valueA); //поменять ячейку для записи
        wb.getRange('J2').setValue(valueE); //поменять ячейку для записи
        sendData_({ cellA: valueA, cellE: valueE });
      }
    }
  }
}

function sendData_(data) {
  const url = `http://185.250.148.23:8888/sheet?cellA=${data.cellA}&cellE=${data.cellE}`;

  const httpResponse = UrlFetchApp.fetch(url, {
    muteHttpExeptions: true,
  });

  if (httpResponse.getResponseCode() === 200) {
    console.log(httpResponse.getContentText());
  } else {
    console.error(httpResponse.getResponseCode(), httpResponse.getContentText());
  }
}

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
