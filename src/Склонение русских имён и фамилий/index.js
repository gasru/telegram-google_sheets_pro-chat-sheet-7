/* eslint-disable new-cap */
/* eslint-disable camelcase */
function declensionNamesRU(name) {
  const cs = CacheService.getScriptCache();
  let code = cs.get('declensionNamesRUcode');
  if (!code) {
    const httpResponse = UrlFetchApp.fetch('https://agalkin.ru/js/Name.js', {
      muteHttpExceptions: true,
    });
    if (httpResponse.getResponseCode() !== 200) {
      throw new Error(httpResponse.getContentText());
    }
    code = httpResponse.getContentText();
    cs.put('declensionNamesRUcode', code, 4 * 60 * 1000);
  }
  eval(code);
  /* global RussianName */
  const rn = new RussianName(name);
  return rn;
}

/* @customfunction */
function СКЛОНЯТЬ_ИМЯ(имя, падеж = 'gcaseIm', тип = 'fullName') {
  // return имя
  const rn = declensionNamesRU(имя);
  return rn[тип](rn[падеж]);
}

/* exported test_СКЛОНЯТЬ_ИМЯ */
function test_СКЛОНЯТЬ_ИМЯ() {
  console.log(СКЛОНЯТЬ_ИМЯ('Рыжиков Михаил Геннадьевич'));
}
