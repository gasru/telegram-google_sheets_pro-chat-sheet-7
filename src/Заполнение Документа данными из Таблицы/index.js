/* exported fillDoc_ */

/**
 *
 * @param {GoogleAppsScript.Document.Document} doc
 * @param {Record<string,unknown>} data
 */
function fillDoc_(doc, data) {
  const body = doc.getBody();

  Object.entries(data).forEach(([key, value]) => {
    body.replaceText(`(?i){{${key}}}`, value);
  });

  body.replaceText(`(?i){{.*?}}`, '');
}

/* exported userActionRunFillDoc1 */
function userActionRunFillDoc1() {
  const values = SpreadsheetApp.getActive()
    .getSheetByName('Заполнение Документа данными из Таблицы')
    .getDataRange()
    .getDisplayValues();
  const data = values[0].reduce((a, v, i) => {
    if (v) {
      a[String(v)] = String(values[1][i]);
    }
    return a;
  }, {});

  const file = DriveApp.getFileById('192avJeIyh524ofvFvuQRaf9QPyqH7FKBEzwNLoHJa-g').makeCopy();

  const doc = DocumentApp.openById(file.getId());

  fillDoc_(doc, data);
}

/* exported userActionRunFillDoc2 */
function userActionRunFillDoc2() {
  const values = SpreadsheetApp.getActive()
    .getRange("'Заполнение Документа данными из Таблицы'!2:2")
    .getDisplayValues()[0];
  const data = {
    заголовок: 'тестовый заголовок',
    имя: values[1],
  };

  const file = DriveApp.getFileById('192avJeIyh524ofvFvuQRaf9QPyqH7FKBEzwNLoHJa-g').makeCopy();

  const doc = DocumentApp.openById(file.getId());

  fillDoc_(doc, data);
}
