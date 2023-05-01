/* exported getBankName */
/**
 * Возвращает название банка по БИН-коду карты
 * @param {number} bin BIN-код карты (первые 6 цифр номера)
 * @return name of bank
 * @customfunction
 */
function getBankName(bin) {
  let response;
  try {
    response = UrlFetchApp.fetch(`https://lookup.binlist.net/${bin}`);
  } catch (error) {
    return 'Банк не найден =(';
  }
  const result = JSON.parse(response.getContentText());
  console.log(result);
  return result.bank.name;
}
