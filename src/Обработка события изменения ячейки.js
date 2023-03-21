const CURRENT_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyaad2HWoqXPdJw3z_iEEPSmUJW3ptUKewNyKDYQ65goCUYUKK__RyWPk2rfdR9FfXK6Q/exec';
const OBRABOTKA_SOBITIY_MASTER_SHEET = 'Обработка события изменения ячейки';

/* exported CHECKING */
function CHECKING(value) {
  const lastValue = PropertiesService.getScriptProperties().getProperty('LAST_VALUE');
  if (castValue_(lastValue) != castValue_(value)) {
    const fetch = UrlFetchApp.fetch(`${CURRENT_SCRIPT_URL}?value=${value}`);
    return fetch.getResponseCode();
  }
}

function castValue_(value) {
  return String(value);
}

/* exported doGet */
function doGet(e) {
  try {
    if (e && e.parameter && Object.prototype.hasOwnProperty.call(e.parameter, 'value')) {
      SpreadsheetApp.getActive()
        .getSheetByName(OBRABOTKA_SOBITIY_MASTER_SHEET)
        .appendRow([new Date(), e.parameter.value]);
      PropertiesService.getScriptProperties().setProperty('LAST_VALUE', e.parameter.value);
      return ContentService.createTextOutput(e.parameter.value);
    }
  } catch (err) {
    return ContentService.createTextOutput(err.message);
  }
  return ContentService.createTextOutput('OK');
}

/* exported userActionChangeCell */
function userActionChangeCell() {
  SpreadsheetApp.getActive()
    .getSheetByName(OBRABOTKA_SOBITIY_MASTER_SHEET)
    .getRange('A1')
    .setValue(Math.random() * 10);
}
