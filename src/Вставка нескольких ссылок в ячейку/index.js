/* exported userActionsJoinLinks */
function userActionsJoinLinks() {
  const data = ['google.com', 'ya.ru'];

  const richTextValueBuilder = SpreadsheetApp.newRichTextValue();

  let index = 0;
  const text = data.join(' ');

  richTextValueBuilder.setText(text);
  data.forEach((link) => {
    richTextValueBuilder.setLinkUrl(index, index + link.length, link);
    index += link.length + 1;
  });

  const cell = SpreadsheetApp.getActive().getRange('Вставка нескольких ссылок в ячейку!A1');
  cell.setRichTextValue(richTextValueBuilder.build());

  cell.activate();
}
