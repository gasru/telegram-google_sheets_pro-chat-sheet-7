/* exported groupOperationsByAppsScript */
function groupOperationsByAppsScript() {
  const sheet = SpreadsheetApp.getActive().getSheetByName('Групповые операции скриптами');
  const values = toCollection_(sheet.getDataRange().getValues());

  const data = values.reduce((a, c) => {
    const outs = c['направление расходов'].__val;
    if (outs) {
      if (!a[outs])
        a[outs] = {
          result: 0,
        };
      a[outs].result += c['расходы'].__val;
    }

    const ins = c['направление прибыли'].__val;
    if (ins) {
      if (!a[ins])
        a[ins] = {
          result: 0,
        };
      a[ins].result += c['прибыль'].__val;
    }

    const adins = c['направление доп. расходов'].__val;
    if (adins) {
      if (!a[adins])
        a[adins] = {
          result: 0,
        };
      a[adins].result -= c['доп. расходы'].__val;
    }

    return a;
  }, {});

  const directs = [];
  const balance = [];

  Object.keys(data)
    .sort()
    .forEach((key) => {
      directs.push([key]);
      balance.push([data[key].result]);
    });

  sheet.getRange(2, values[0]['направление'].__col, directs.length, directs[0].length).setValues(directs);
  sheet.getRange(2, values[0]['баланс'].__col, balance.length, balance[0].length).setValues(balance);
}

function toCollection_(array) {
  return array.slice(1).map(
    (_, rowIndex) =>
      array[0].reduce((rowCollection, header, columnIndex) => {
        rowCollection[
          String(header)
            .toLowerCase()
            .replace(/[\r\n]+/g, ' ') || `__col${columnIndex}`
        ] = {
          __col: columnIndex + 1,
          __row: rowIndex + 2,
          __val: array[rowIndex + 1][columnIndex],
        };
        return rowCollection;
      }, {}),
    [],
  );
}
