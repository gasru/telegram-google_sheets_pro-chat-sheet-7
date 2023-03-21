/* exported onFormSubmit */

/**
 * Эту функцию необходимо установить как триггер для Таблицы - Отправка Формы
 *
 * @param {GoogleAppsScript.Events.SheetsOnFormSubmit} e
 */
function onFormSubmit(e) {
  e.range.getSheet().sort(1, false);
}
