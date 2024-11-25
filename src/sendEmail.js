/* exported send */
function send() {
  const topic = 'Транспортно-экспедиторские услуги';
  const emailAdress = 'viapenkin@gmail.com';
  const win = SpreadsheetApp.getUi();
  const response = win.prompt('какой-то_текст', win.ButtonSet.OK);
  if (response.getSelectedButton() == 'OK') {
    if (response.getResponseText() != '') {
      // let res="<mark>"+"<font size=5>"+"<font color=FF0000>"+"!Важно. Суммы по проектам "+response.getResponseText()+" не согласованы!<br><br><br>"+"</font>"+"</font>"+"</mark>"

      const template = HtmlService.createTemplateFromFile('sendMailTemplate.html');
      template.text = response.getResponseText();
      template.someText = 'Какой-то текст';
      const htmlBody = template.evaluate().getContent();

      MailApp.sendEmail({
        to: emailAdress,
        subject: topic,
        htmlBody,
      });
    } else {
      MailApp.sendEmail({
        to: emailAdress,
        subject: topic,
        htmlBody: 'какой-то_текст',
      });
    }
  }
}
