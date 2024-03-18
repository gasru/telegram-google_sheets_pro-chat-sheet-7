/* global RichTextAssistant */

/* exported userActionJoinLinks */
function userActionJoinLinks() {
  const sheetName = 'Объединение ссылок';

  // Source RichText
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);

  sheet.activate();

  const richText = sheet.getRange('A1:A3').getRichTextValues();

  let sourceRichTextValue = richText[0][0];

  while (richText.splice(0, 1)) {
    console.log(richText.length);
    if (!richText.length) break;
    sourceRichTextValue = RichTextAssistant.appendTexts({
      sourceRichTextValue,
      appendRichTextValue: richText[0][0],
      lastLineBreak: true,
    });
  }

  sheet.getRange('E1').setRichTextValue(sourceRichTextValue);
}
