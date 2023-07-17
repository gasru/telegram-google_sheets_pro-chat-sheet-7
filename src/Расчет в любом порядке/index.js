/* exported triggerOnEditRecalculateData */
/**
 *
 * @param {{range: GoogleAppsScript.Spreadsheet.Range}} e
 */
function triggerOnEditRecalculateData(e) {
  const sheet = e.range.getSheet();
  if (sheet.getName() !== 'Расчет в любом порядке') return;
  const col = e.range.getColumn();
  const row = e.range.getRow();
  if (![2, 4, 6].includes(col)) return;
  const fix = [2, 4, 6].indexOf(col);
  if (row === 3) {
    const recalc = new Recalculator([([_, b, c]) => c - b, ([a, _, c]) => c - a, ([a, b, _]) => a + b]);
    const range = sheet.getRange('B3:F3');
    const [a, _, b, __, c] = range.getValues()[0];
    const params = [a, b, c];

    const [a1, b1, c1] = recalc.calc(params, fix);
    range.setValues([[a1, _, b1, __, c1]]);
  } else if (row === 6) {
    const recalc = new Recalculator([([_, b, c]) => c / b, ([a, _, c]) => c / a, ([a, b, _]) => a * b]);
    const range = sheet.getRange('B6:F6');
    const [a, _, b, __, c] = range.getValues()[0];
    const params = [a, b, c];

    const [a1, b1, c1] = recalc.calc(params, fix);
    range.setValues([[a1, _, b1, __, c1]]);
  }
  SpreadsheetApp.getActive().toast('Посчитано');
}

/* exported Recalculator */
class Recalculator {
  constructor(calcs) {
    this.calcs = calcs;
  }

  calc(params, fix) {
    // SpreadsheetApp.getActive().toast(JSON.stringify(params));
    if (params.filter((p) => p === '' || isNaN(p)).length > 1)
      return params.map((p) => (isNaN(p) || p === '' ? '' : Number(p)));
    const index = params.map((p) => (isNaN(p) || p === '' ? '' : Number(p))).findIndex((p) => p === '');

    if (index === -1) return params.map((v, i) => (i === fix ? v : ''));
    const res = this.calcs[index](params);
    const out = [...params];
    out[index] = Number.isInteger(res) ? res : Number(res).toFixed(2);
    return out;
  }
}
