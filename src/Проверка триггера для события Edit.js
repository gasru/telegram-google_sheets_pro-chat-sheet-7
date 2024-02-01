function myFunction(e) {
  if (e.range.getSheet().getName() === 'Проверка триггера для события Edit')
    SpreadsheetApp.getActive().toast('Edit event');
}
