/* exported onEdit */
function onEdit(e) {
  Logger.log(JSON.stringify(e));
  /** @type {SpreadsheetApp.Range} */
  const range = e.range;

  /** @type {SpreadsheetApp.Sheet} */
  const sheet = range.getSheet();
  const sheetName = sheet.getSheetName();

  if (sheetName == sheetNames.Englevels) {
    onEditEnglevels(e);
  }
}

function onEditEnglevels(e) {
  // Logger.log(JSON.stringify(e));

  /** @type {SpreadsheetApp.Range} */
  const range = e.range;

  /** @type {SpreadsheetApp.Sheet} */
  const sheet = range.getSheet();

  let rowStart = range.rowStart;
  const rowEnd = range.rowEnd;
  const colStart = range.columnStart;
  const colEnd = range.columnEnd;

  rowStart = rowStart < rows.Englevels.body.first ? rows.Englevels.body.first : rowStart;

  if (colStart <= cols.Englevels.body.last && cols.Englevels.body.first <= colEnd) {
    const vlsDate = sheet
      .getRange(
        rowStart,
        cols.Englevels.Дата.first,
        rowEnd - rowStart + 1,
        cols.Englevels.Дата.last - cols.Englevels.Дата.first + 1,
      )
      .getValues();
    let vlsBody = sheet
      .getRange(
        rowStart,
        cols.Englevels.body.first,
        rowEnd - rowStart + 1,
        cols.Englevels.body.last - cols.Englevels.body.first + 1,
      )
      .getValues();

    vlsBody = vlsBody.map((v, i, arr) => {
      return v.join('');
    });
    const nowDate = new Date();
    for (let i = 0; i < vlsDate.length; i++) {
      if (!vlsBody[i]) {
        vlsDate[i][0] = undefined;
        vlsDate[i][1] = undefined;
        continue;
      }

      if (!vlsDate[i][0]) {
        vlsDate[i][0] = nowDate;
      }
      vlsDate[i][1] = nowDate;
    }
    sheet
      .getRange(
        rowStart,
        cols.Englevels.Дата.first,
        rowEnd - rowStart + 1,
        cols.Englevels.Дата.last - cols.Englevels.Дата.first + 1,
      )
      .setValues(vlsDate);
  }
}

const sheetNames = {
  Englevels: 'Englevels',
};

const cols = {
  Englevels: {
    Дата: {
      first: nr('A'),
      last: nr('B'),
      создания: nr('A'),
      изменения: nr('B'),
    },
    body: {
      first: nr('C'),
      last: nr('AR'),
    },
  },
};

const rows = {
  Englevels: {
    body: {
      first: 2,
      last: undefined,
    },
  },
};

function flStr(str) {
  if (!str) {
    return '';
  }
  return str.toString().replace(/ +/g, ' ').trim().toUpperCase();
}

function nr(A1) {
  A1 = flStr(A1);
  A1 = A1.replace(/\d/g, '');
  let i;
  let l;
  let chr;
  let sum = 0;
  const A = 'A'.charCodeAt(0);
  const radix = 'Z'.charCodeAt(0) - A + 1;
  for (i = 0, l = A1.length; i < l; i++) {
    chr = A1.charCodeAt(i);
    sum = sum * radix + chr - A + 1;
  }
  return sum;
}

/* exported nc */
function nc(column) {
  column = parseInt('' + column);
  if (isNaN(column)) {
    throw new Error(`Файл mrColumnToNr функция nrCol(): не найдено буквенное обозначение для колонки "${column}"`);
  }

  column = column - 1;
  switch (column) {
    case 0: {
      return 'A';
    }
    case 1: {
      return 'B';
    }
    case 2: {
      return 'C';
    }
    case 3: {
      return 'D';
    }
    case 4: {
      return 'E';
    }
    case 5: {
      return 'F';
    }
    case 6: {
      return 'G';
    }
    case 7: {
      return 'H';
    }
    case 8: {
      return 'I';
    }
    case 9: {
      return 'J';
    }
    case 10: {
      return 'K';
    }
    case 11: {
      return 'L';
    }
    case 12: {
      return 'M';
    }
    case 13: {
      return 'N';
    }
    case 14: {
      return 'O';
    }
    case 15: {
      return 'P';
    }
    case 16: {
      return 'Q';
    }
    case 17: {
      return 'R';
    }
    case 18: {
      return 'S';
    }
    case 19: {
      return 'T';
    }
    case 20: {
      return 'U';
    }
    case 21: {
      return 'V';
    }
    case 22: {
      return 'W';
    }
    case 23: {
      return 'X';
    }
    case 24: {
      return 'Y';
    }
    case 25: {
      return 'Z';
    }

    default: {
      if (column > 25) {
        return `${nc(column / 26)}${nc((column % 26) + 1)}`;
      }
    }
  }

  throw new Error('файл mrColumnToNr функция nc(): не найдено буквенное обозначение для колонки "' + column + '"');
}
