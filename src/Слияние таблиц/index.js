function REPORT(value, spec) {
  const report_ = {
    data: {},
    headers: {
      keys: {},
      headers_: [],
    },
  };
  spec.forEach((specData) => {
    const [indS, count, name] = specData;
    if (name === '') {
      return;
    }
    value.forEach((valueData) => {
      const [indV, val, prod] = valueData;
      if (prod === '') {
        return;
      }
      if (indV === indS) {
        if (!report_.data[name]) {
          report_.data[name] = {};
        }
        if (!report_.headers.keys[prod]) {
          report_.headers.keys[prod] = report_.headers.headers_.push(prod);
        }
        const val_ = val * count;
        if (val_ > 0) {
          if (!report_.data[name][prod]) {
            report_.data[name][prod] = 0;
          }
          report_.data[name][prod] += val_;
        }
      }
    });
  });

  const sortedHeaders = report_.headers.headers_.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  const result = Object.keys(report_.data)
    .sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    })
    .map((key) => {
      const row = sortedHeaders.map((header) => report_.data[key][header] || 0);
      row.unshift(key);
      return row;
    });
  result.unshift(['', ...sortedHeaders]);
  return result;
}

function testREPORT() {
  const book = SpreadsheetApp.getActive();
  const sheet = book.getSheetByName('Слияние двух таблиц');
  const value = sheet
    .getRange('A2:D')
    .getValues()
    .map((row) => {
      const [_0, _1, _2, _3] = row;
      return [`${_0}${_1}`, _2, _3];
    });
  const spec = sheet
    .getRange('F2:I')
    .getValues()
    .map((row) => {
      const [_0, _1, _2, _3] = row;
      return [`${_0}${_1}`, _2, _3];
    });
  const res = REPORT(value, spec);
  console.log(res);
}
