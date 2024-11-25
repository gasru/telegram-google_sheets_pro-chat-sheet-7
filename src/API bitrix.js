function dealTimelineCompany() {
  //пример явного указания id сущности
  let ss = SpreadsheetApp.getActive().getSheetByName('Комменты компании');
  let data = {
    filter: { ENTITY_ID: 32402, ENTITY_TYPE: 'company' },
    select: ['COMMENT'],
  };

  let options = {
    method: 'get',
    contentType: 'application/json',
    payload: JSON.stringify(data),
  };
  let response = UrlFetchApp.fetch(
    'https://gkbig.bitrix24.ru/rest/260/oxt60w41x8j3lxjl/crm.timeline.comment.list.json',
    options,
  );
  let dataAll = JSON.parse(response.getContentText());
  let values = dataAll.result.map((item) => [item.COMMENT]);
  console.log(values);
}

function dealTimelineCompanyNew() {
  //пример указания id сущности через префиксы
  let ss = SpreadsheetApp.getActive().getSheetByName('Комменты компании');
  let data = {
    filter: { ENTITY_ID: '>=2', ENTITY_TYPE: 'company' },
    select: ['COMMENT'],
  };

  let options = {
    method: 'get',
    contentType: 'application/json',
    payload: JSON.stringify(data),
  };
  let response = UrlFetchApp.fetch(
    'https://gkbig.bitrix24.ru/rest/260/oxt60w41x8j3lxjl/crm.timeline.comment.list.json',
    options,
  );
  let dataAll = JSON.parse(response.getContentText());
  let values = dataAll.result.map((item) => [item.COMMENT]);
  console.log(values);
}
