function calcData() {
  const book = SpreadsheetApp.getActive();

  const spravochnik = book
    .getRange("'Как заменить формулу скриптом'!M2:N5")
    .getValues()
    .reduce((a, r) => {
      if (r[0] && r[1]) {
        a[r[0]] = r[1];
      }
      return a;
    }, {});

  const headersX = book
    .getRange("'Как заменить формулу скриптом'!D2:G2")
    .getValues()[0]
    .map((h) => spravochnik[h] || 0);

  const voprosData = book.getRange('Как заменить формулу скриптом!D3:G8').getValues();

  const voprosData2 = book.getRange('Как заменить формулу скриптом!H3:I8').getValues();

  const values = voprosData.map((row, j) => {
    return [row.reduce((a, v, i) => a + headersX[i] * v, 0) + +voprosData2[j].reduce((a, v) => a + v, 0)];
  });

  book
    .getSheetByName('Как заменить формулу скриптом')
    .getRange(3, 10, values.length, values[0].length)
    .setValues(values)
    .activate();
}
