function userActionsGetNotesFromSheetToAnother() {
  const fromSheetName = 'Лист с заметками';
  const toSheetName = 'Получение заметок из Листа с заметками';

  const book = SpreadsheetApp.getActive();
  const notes = book.getSheetByName(fromSheetName).getDataRange().getNotes();
  book.getSheetByName(toSheetName).getRange(1, 1, notes.length, notes[0].length).setValues(notes);
}
