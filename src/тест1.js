function onEdit(e) {
  var editedRange = e.range;
  var sheet = editedRange.getSheet();
  
  // Проверяем, что изменение произошло в ячейке D1
  if (editedRange.getA1Notation() === "D1" && sheet.getName() === "Фильтр диапазона макрос") {
    var dateToMatch = editedRange.getValue(); // Получаем значение из ячейки D1
    
    // Если в ячейке D1 отсутствует искомое значение, то выводим всю таблицу
    if (dateToMatch === "") {
      sheet.showRows(1, sheet.getMaxRows()); // Показываем все строки
    } else {
      var dataRange = sheet.getRange("D3:D1000"); // Диапазон дат
      var dates = dataRange.getValues(); // Получаем все значения в диапазоне дат
      
      // Показываем только значения, соответствующие искомой дате, и скрываем остальные
      for (var i = 0; i < dates.length; i++) {
        if (dates[i][0] instanceof Date && dates[i][0].getTime() === dateToMatch.getTime()) {
          sheet.showRows(i + 3); // Показываем строку, если значение соответствует
        } else {
          sheet.hideRows(i + 3); // Скрываем строку, если значение не соответствует
        }
      }
    }
  }
}