/* exported timeBasedTrigger */
function timeBasedTrigger() {
  const range = SpreadsheetApp.getActive().getSheetByName('Запись предыдущего значения в заметки').getDataRange();
  updateHistNotesByRange_(range);
}

/**
 *
 * @param {GoogleAppsScript.Spreadsheet.Range} range
 */
function updateHistNotesByRange_(range) {
  const values = range.getDisplayValues();
  const notes = range.getNotes().map((row) =>
    row.map((cell) => {
      const [last, ...rest] = cell.split('✅\n');
      return { last, rest };
    }),
  );
  const newNotes = values.map((row, i) =>
    row.map((cell, j) => {
      const res = [notes[i][j].last, ...notes[i][j].rest];
      if (cell !== notes[i][j].last) res.unshift(cell);
      return res.join('✅\n');
    }),
  );
  range.setNotes(newNotes);
}
