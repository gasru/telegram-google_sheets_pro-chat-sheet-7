/* exported testHttpCall */
/**
 *   https://t.me/googleappsscriptrc/57909
 */
function testHttpCall() {
  const e = {
    parameter: {
      'auth[domain]': 'testportal2023.bitrix24.ru',
      'auth[client_endpoint]': 'https://testportal2023.bitrix24.ru/rest/',
      'auth[member_id]': 'a74ca2516c7ed9d3edfa0920c019cc53',
      'auth[server_endpoint]': 'https://oauth.bitrix.info/rest/',
      event: 'ONCRMDEALADD',
      ts: '1677835735',
      'auth[application_token]': 's4za2dash0v3kli07m637t8r2nvce9u7',
      'data[FIELDS][ID]': '1515',
    },
  };
  doPost_(e);
}

function doPost_(e) {
  console.log(e.parameter['data[FIELDS][ID]']);
}
