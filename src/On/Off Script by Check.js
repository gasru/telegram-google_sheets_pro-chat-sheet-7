function StartScriptByCheck() {
  const ss = SpreadsheetApp.getActiveSheet();
  const list = ss.getSheetByName('Запуск скрипта по флажку');

  if (list.getRange(2, 5).isChecked() === true) {
    AutoDraggDownFormulas;
    draggDownOneFormula_;

    list.getRange(2, 5).uncheck();
  }

  function AutoDraggDownFormulas() {
    const sheet = SpreadsheetApp.getActiveSheet();
    // const list = sheet.getSheetByName('Запуск скрипта по флажку');
    const base = sheet.getRange('A2:A'); // относительно чего протягиваем формулы
    const colFormula01 = sheet.getRange('B2');
    draggDownOneFormula_(base, colFormula01);
    const colFormula02 = sheet.getRange('C2');
    draggDownOneFormula_(base, colFormula02);
  }
  function draggDownOneFormula_(base, colFormula) {
    const baseValues = base.getValues();
    const lastBase = baseValues.length - baseValues.reverse().findIndex((row) => row[0] !== '');
    const colFormulaFormula = colFormula.getFormula();
    colFormula
      .getSheet()
      .getRange(base.getRow(), colFormula.getColumn(), lastBase + 1)
      .setFormula(colFormulaFormula);
  }
}
