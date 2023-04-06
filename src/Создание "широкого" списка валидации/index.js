/**
 * @typedef {{
 *  startRow: number;
 *  countRows: number;
 *  startColumn: number;
 *  countColunbs: number;
 * }} Range
 */

/**
 *
 * @param {Range} range
 * @param {*} source
 */

function setDataValidation(range, source) {
  const requests = [];
  // for (let i = 2; i < 5; i++) {
  // const element = array[index];
  const dataValidationRule = Sheets.newDataValidationRule();
  dataValidationRule.condition = {
    type: 'ONE_OF_RANGE',
    values: [
      {
        userEnteredValue: `=C2:F3`,
      },
    ],
  };

  const setDataValidationRequest = Sheets.newSetDataValidationRequest();
  setDataValidationRequest.range = {
    sheetId: 249783113,
    startRowIndex: 1,
    endRowIndex: 2,
    startColumnIndex: 0,
    endColumnIndex: 1,
  };
  setDataValidationRequest.rule = dataValidationRule;
  const request = Sheets.newRequest();
  request.setDataValidation = setDataValidationRequest;

  requests.push(request);
  // }
  Sheets.Spreadsheets.batchUpdate({ requests }, '1uZ_IrQz4h3lljy2c1GBdixZxf_OQdS63aKetb8qF57o');
}
