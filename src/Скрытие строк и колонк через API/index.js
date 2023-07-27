function userActionHideRowsViaAPI() {
  showHideRowsViaAPI(true);
}

function userActionShowRowsViaAPI() {
  showHideRowsViaAPI(false);
}

// Скрыть/показать строки через API
function showHideRowsViaAPI(hide) {
  const book = SpreadsheetApp.getActive();
  const sheet = book.getSheetByName('Скрытие строк и колонк через API');
  sheet.activate();

  // Скрывает/показывает со 2й по 10ю строки

  Sheets.Spreadsheets.batchUpdate(
    {
      requests: [
        {
          updateDimensionProperties: {
            fields: 'hiddenByUser',
            properties: {
              hiddenByUser: !!hide
            },
            range: {
              sheetId: sheet.getSheetId(),
              dimension: 'ROWS',
              startIndex: 1,
              endIndex: 10
            }
          }
        }
      ]
    },
    book.getId()
  );
}

// Скрыть по списку строк

/* exported hideByRowNumbers */
function hideByRowNumbers() {
  const book = SpreadsheetApp.getActive();
  const sheet = book.getSheetByName('Скрытие строк и колонк через API');
  sheet.activate();
  const rowsToHide = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15];
  const requests = rowsToHide
    .sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    })
    .reduce((a, n, i) => {
      if (i === 0) {
        a.push({ startIndex: n, endIndex: n });
        return a;
      }
      if (a.at(-1).endIndex + 1 === n) {
        a.at(-1).endIndex = n;
        return a;
      }
      a.push({ startIndex: n, endIndex: n });
      return a;
    }, [])
    .map((request) => {
      return {
        updateDimensionProperties: {
          fields: 'hiddenByUser',
          properties: {
            hiddenByUser: true
          },
          range: {
            sheetId: sheet.getSheetId(),
            dimension: 'ROWS',
            startIndex: request.startIndex,
            endIndex: request.endIndex
          }
        }
      };
    });

  Sheets.Spreadsheets.batchUpdate(
    {
      requests
    },
    book.getId()
  );
}

// Скрыть строку переданног диапазона

/* exported hideRowOfRange */
function hideRowOfRange() {
  const book = SpreadsheetApp.getActive();
  const sheet = book.getSheetByName('Скрытие строк и колонк через API');
  sheet.activate();

  // Тут нужно определить начало обновляемого диапазона
  const startIndex = 3; // 3 - это четвертая строка

  const request = {
    updateDimensionProperties: {
      fields: 'hiddenByUser',
      properties: {
        hiddenByUser: true
      },
      range: {
        sheetId: sheet.getSheetId(),
        dimension: 'ROWS',
        startIndex: startIndex,
        endIndex: startIndex + 1
      }
    }
  };

  Sheets.Spreadsheets.batchUpdate(
    {
      requests: [request]
    },
    book.getId()
  );
}
