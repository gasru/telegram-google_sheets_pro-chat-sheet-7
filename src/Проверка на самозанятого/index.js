/**
 * Проверяет, является ли владелец ИНН плательщиком налога на профессиональный налог на конкретную дату
 * @param {string} inn ИНН для проверки
 * @param {number|string} date Дата в формате "yyyy-MM-dd"
 * @return {boolean} true/false
 * @customfunction
 */
function checkNpdStatus_(inn, date) {
  const apiUrl = 'https://statusnpd.nalog.ru:443/api/v1/tracker/taxpayer_status';
  const payload = {
    inn,
    requestDate: Utilities.formatDate(new Date(date), 'GMT', 'yyyy-MM-dd'),
  };
  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    muteHttpExceptions: false,
  };

  const response = UrlFetchApp.fetch(apiUrl, options);
  const responseData = JSON.parse(response.getContentText());
  return responseData.status;
}

/* exported CHECK_NPD_STATUS */
/**
 * Checks whether the INN individual taxpayer number is a professional tax payer on a specific date
 * @param {INN} INN individual taxpayer number
 * @param {DATE} DATE is an optional parameter. showModalDialogtring or date
 * @customfunction
 */
function CHECK_NPD_STATUS(INN, DATE) {
  if (!DATE) DATE = new Date();
  return checkNpdStatus_(INN, DATE);
}

/* exported ПРОВЕРИТЬ_НПД_СТАТУС */
/**
 * Проверяет, является ли владелец ИНН плательщиком налога на профессиональный налог на конкретную дату
 * @param {ИНН} ИНН Индивидуальный номер налогоплательщика
 * @param {Дата} Дата Необязательный параметр. Строка или дата
 * @customfunction
 */
function ПРОВЕРИТЬ_НПД_СТАТУС(ИНН, Дата) {
  if (!Дата) Дата = new Date();
  return checkNpdStatus_(ИНН, Дата);
}
