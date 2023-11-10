/**
 *
 * @param {string} companyName
 * @param {string} contactName
 * @param {('Да'|'Нет')} informStatus
 * @param {string} phone
 * @param {string} email
 * @returns
 */
function addCompany_(companyName, contactName, informStatus, phone, email) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Создавать список и чекбокс');

  // Создаем объекты для чекбокса и компании
  var company = companyName;

  const companyId = `${String(companyName).toUpperCase().replace(/\s+/, '_')}_${new Date()}`;

  var newRow = [companyId, false, company, contactName, informStatus, phone, email];
  const lr = sheet.getLastRow() + 1;
  sheet.appendRow(newRow);

  const validations = sheet.getRange('2:2').getDataValidations();

  sheet.getRange(`${lr}:${lr}`).setDataValidations(validations);

  return companyId;
}

/* exported runAddCompany */
function runAddCompany() {
  addCompany_(`Comp_${new Date().getTime()}`, 'Contact', 'Да', '77777777777', 'qerwerq@afaffa.ru');
}
