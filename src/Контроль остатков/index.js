/* exported sendStockAlerts */
function sendStockAlerts() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Контроль остатков');
  const [, ...data] = sheet.getDataRange().getValues();

  const alerts = [];

  for (const row of data) {
    const [, offerId, name, currentStock, minStock, watch] = row;

    if (currentStock < minStock && watch) {
      const alert = `Товар: ${name} (артикул: ${offerId}) имеет низкий уровень запаса: ${currentStock} (Минимальный: ${minStock})`;
      alerts.push(alert);
    }
  }

  if (alerts.length > 0) {
    const email = 'нужная-почта@googlesheets.ru'; // Замените на свой email
    const subject = 'Уведомление о низком уровне запасов на Ozon';
    const message = alerts.join('\n\n');

    MailApp.sendEmail(email, subject, message);
  }
}
