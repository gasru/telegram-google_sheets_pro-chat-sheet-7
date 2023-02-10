/**
 * @typedef {{
 *   connectionSettings: Extra.FileData.ConnectionSettings
 * }} Extra.FileData
 */

/**
 * @typedef {{
 *   savedProxy: string,
 *   isTaiwan: boolean,
 *   resetConnection: boolean,
 *   reconnectTime: number,
 *   otherLoginTime: number,
 *   workerSpeed: number,
 *   cmdInterval: number,
 *   resetTime: number,
 *   resetTimeBegin: number,
 *   saveLogToFile: number,
 *   dontClearLog: boolean,
 *   refreshKey: boolean,
 *   logResetTime: number
 * }} Extra.FileData.ConnectionSettings
 */

function loadFile_() {
  const file = DriveApp.getFileById('1IBXrxOctCLhgEIHbVIVAxutnXguRg0kV');
  /** @type {Extra.FileData.ConnectionSettings} */
  const data = JSON.parse(file.getBlob().getDataAsString());
  return data;
}

function userActionLoadData() {
  const data = loadFile_();
  const sheet = SpreadsheetApp.getActive().getSheetByName('Редактор файла JSON');
  loadConnectionSettings_(sheet, data);
}

function userActionGetModifiedFile() {
  const data = loadFile_();
  const sheet = SpreadsheetApp.getActive().getSheetByName('Редактор файла JSON');
  packConnectionSettings_(sheet, data);
  console.log(data);
}

/**
 * @param {globalThis.SpreadsheetApp.Sheet} sheet
 * @param {Extra.FileData} data
 */
function loadConnectionSettings_(sheet, data) {
  const values = Object.keys(data.connectionSettings).map((key) => [key, data.connectionSettings[key]]);
  sheet.getRange(1, 1, values.length, values[0].length).setValues(values);
}

/**
 * @param {globalThis.SpreadsheetApp.Sheet} sheet
 * @param {Extra.FileData} data
 * @returns {Extra.FileData.ConnectionSettings}
 */
function packConnectionSettings_(sheet, data) {
  const connectionSettings = sheet
    .getRange(1, 1, 13, 2)
    .getValues()
    .reduce((a, c) => {
      const [key, val] = c;
      a[key] = val;
      return a;
    }, {});
  data.connectionSettings = connectionSettings;
}
