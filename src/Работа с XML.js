/* exported extractDataXML */

function extractDataXML() {
  const xml = getDataAsXMLString_();
  const doc = XmlService.parse(xml);
  const slugs = doc.getRootElement();

  const slugsList = slugs.getChildren('slug');
  const values = slugsList.map((slug) => {
    const storyId = slug.getChild('storyId').getText();
    const storyStatus = slug.getChild('storyStatus').getValue();
    const storyTitle = slug.getChild('storyTitle').getValue();
    return [storyId, storyTitle, storyStatus];
  });
  if (values.length) {
    console.log(values);
    values.unshift(['storyId', 'storyStatus', 'storyTitle']);
    const book = SpreadsheetApp.getActive();
    const sheet = book.getSheetByName('Работа с XML') || book.insertSheet('Работа с XML');
    sheet.clearContents().getRange(1, 1, values.length, values[0].length).setValues(values);
  }
}

function getDataAsXMLString_() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<slugs>
  <slug>
    <storyId>591921840</storyId>
    <storyTitle>JN_MDG_SHAPKA</storyTitle>
    <storyStatus>7105</storyStatus>
    <storyDur>00:00:11:24</storyDur>
    <storyCreated>03/60/2023 16:00:10</storyCreated>
    <storyCreatedBy>Server</storyCreatedBy>
    <storyModified>03/60/2023 16:00:10</storyModified>
    <storyModifiedBy>Server</storyModifiedBy>
    <storyCustom name="col1" label="NLE"></storyCustom>
    <storyCustom name="col2" label="Test1"></storyCustom>
    <storyCustom name="col3" label="Test2 ">false</storyCustom>
    <storyCustom name="col4" label="Test3 ">false</storyCustom>
    <storyCustom name="col5" label="Test4"></storyCustom>
    <storyCustom name="col6" label="Test5"></storyCustom>
    <storyCustom name="col7" label="taskNumbers">12</storyCustom>
    <slugId>591912579</slugId>
    <script>
      <main>
        <body>
          <element>
            <elementId>2</elementId>
            <elementType>Good</elementType>
            <elementDur>00:00:11:24</elementDur>
            <clip>
              <clipName>JN_MDG_SHAPKA</clipName>
              <clipMosId>stratus</clipMosId>
              <clipObjId>00008RIO</clipObjId>
              <clipFilePath></clipFilePath>
              <clipIn></clipIn>
              <clipOut></clipOut>
            </clip>
            <text></text>
            <commands/>
          </element>
        </body>
      </main>
    </script>
  </slug>
  <slug>
    <storyId>591951842</storyId>
    <storyTitle>JN_MDG_SHAPKA2</storyTitle>
    <storyStatus>7105</storyStatus>
    <storyDur>00:00:11:24</storyDur>
    <storyCreated>03/60/2023 16:00:10</storyCreated>
    <storyCreatedBy>Server</storyCreatedBy>
    <storyModified>03/60/2023 16:00:10</storyModified>
    <storyModifiedBy>Server</storyModifiedBy>
    <storyCustom name="col1" label="NLE"></storyCustom>
    <storyCustom name="col2" label="Test1"></storyCustom>
    <storyCustom name="col3" label="Test2 ">false</storyCustom>
    <storyCustom name="col4" label="Test3 ">false</storyCustom>
    <storyCustom name="col5" label="Test4"></storyCustom>
    <storyCustom name="col6" label="Test5"></storyCustom>
    <storyCustom name="col7" label="taskNumbers">84623</storyCustom>
    <slugId>591912579</slugId>
    <script>
      <main>
        <body>
          <element>
            <elementId>2</elementId>
            <elementType>Good</elementType>
            <elementDur>00:00:11:24</elementDur>
            <clip>
              <clipName>JN_MDG_SHAPKA2</clipName>
              <clipMosId>stratus</clipMosId>
              <clipObjId>00008RIO</clipObjId>
              <clipFilePath></clipFilePath>
              <clipIn></clipIn>
              <clipOut></clipOut>
            </clip>
            <text></text>
            <commands/>
          </element>
        </body>
      </main>
    </script>
  </slug>
  <slug>
    <storyId>591921840</storyId>
    <storyTitle>JN_MDG_SHAPKA343</storyTitle>
    <storyStatus>7105</storyStatus>
    <storyDur>00:00:11:24</storyDur>
    <storyCreated>03/60/2023 16:00:10</storyCreated>
    <storyCreatedBy>Server</storyCreatedBy>
    <storyModified>03/60/2023 16:00:10</storyModified>
    <storyModifiedBy>Server</storyModifiedBy>
    <storyCustom name="col1" label="NLE"></storyCustom>
    <storyCustom name="col2" label="Test1"></storyCustom>
    <storyCustom name="col3" label="Test2 ">false</storyCustom>
    <storyCustom name="col4" label="Test3 ">false</storyCustom>
    <storyCustom name="col5" label="Test4"></storyCustom>
    <storyCustom name="col6" label="Test5"></storyCustom>
    <storyCustom name="col7" label="taskNumbers"></storyCustom>
    <slugId>591912579</slugId>
    <script>
      <main>
        <body>
          <element>
            <elementId>2</elementId>
            <elementType>Good</elementType>
            <elementDur>00:00:11:24</elementDur>
            <clip>
              <clipName>JN_MDG_SHAPKA343</clipName>
              <clipMosId>stratus</clipMosId>
              <clipObjId>00008RIO</clipObjId>
              <clipFilePath></clipFilePath>
              <clipIn></clipIn>
              <clipOut></clipOut>
            </clip>
            <text></text>
            <commands/>
          </element>
        </body>
      </main>
    </script>
  </slug>
</slugs>`;
}
