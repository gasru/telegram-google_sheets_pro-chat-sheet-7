// Compiled using condiformbysheets 1.0.0 (TypeScript 4.9.5)
var exports = exports || {};
var module = module || { exports: exports };
Object.defineProperty(exports, '__esModule', { value: true });
//import { sheets, sheets_v4 } from '@googleapis/sheets'
/**
 * Задача:
 * Применить УФ к разным диапазонам одного столбца столбца.
 * На входе имеем индексы строк между которыми должно быть УФ
 */
function addGradientRules() {
  const table = SpreadsheetApp.getActive();
  const targetSheetName = 'condiform';
  const targetColumnIndex = 5;
  const sheetId = table.getSheetByName(targetSheetName)?.getSheetId();
  const rangesForWork = [
    {
      start: 1,
      end: 5,
    },
    {
      start: 10,
      end: 15,
    },
    {
      start: 20,
      end: 25,
    },
  ];
  const addRuleRequests = rangesForWork.map((ruleRange) => {
    return {
      addConditionalFormatRule: {
        index: 0,
        rule: {
          ranges: [
            {
              sheetId,
              startColumnIndex: targetColumnIndex,
              endColumnIndex: targetColumnIndex + 1,
              startRowIndex: ruleRange.start - 1,
              endRowIndex: ruleRange.end,
            },
          ],
          gradientRule: {
            minpoint: {
              type: 'MIN',
              colorStyle: { rgbColor: { red: 255 / 255, green: 0, blue: 0 } },
            },
            midpoint: {
              type: 'PERCENTILE',
              value: '50',
              colorStyle: { rgbColor: { red: 255 / 255, green: 239 / 255, blue: 0 } },
            },
            maxpoint: {
              type: 'MAX',
              colorStyle: { rgbColor: { red: 6 / 255, green: 255 / 255, blue: 0 } },
            },
          },
        },
      },
    };
  });
  Sheets.Spreadsheets?.batchUpdate(
    {
      requests: addRuleRequests,
    },
    table.getId(),
  );
}
