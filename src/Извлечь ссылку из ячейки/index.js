/* exported extractLink_ */

function EXTRACTLINK(REF) {
  const ref = SpreadsheetApp.getActive().getRange(REF);
  return extractLink_(ref);
}

/**
 *
 * @param {GoogleAppsScript.Spreadsheet.Range} ref
 */
function extractLink_(ref) {
  const richTextValues = ref.getRichTextValues();
  return richTextValues.map((row) =>
    row.map((cell) => {
      return cell.getLinkUrl();
    }),
  );
}
