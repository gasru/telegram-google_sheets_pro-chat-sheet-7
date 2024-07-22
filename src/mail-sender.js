function sendStockAlerts() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('stocks_control');
  const [headers, ...data] = sheet.getDataRange().getValues();

  const alerts = [];

  for (const row of data) {
    const [sku, offer_id, name, current_stock, min_stock, watch] = row;

    if (current_stock < min_stock && watch) {
      const alert = `Товар: ${name} (артикул: ${offer_id}) имеет низкий уровень запаса: ${current_stock} (Минимальный: ${min_stock})`;
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
