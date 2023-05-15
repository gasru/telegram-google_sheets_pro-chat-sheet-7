/* exported avSalesPrice */
function avSalesPrice() {
  const sheetGet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Расчет разницы');
  // const sheetOut = SpreadsheetApp.getActive().getSheetByName('Simulation');

  const rangeTurnoverActual = sheetGet.getRange('C4:4');
  const rangeQuantitesActual = sheetGet.getRange('C2:2');

  const turnoverActual = rangeTurnoverActual.getValues();
  const quantitiesActual = rangeQuantitesActual.getValues();
  // console.log(JSON.stringify(turnoverActual))
  // console.log(JSON.stringify(quantitiesActual))
  let avPrice = quantitiesActual[0].map((x, i) => turnoverActual[0][i] / x);
  avPrice = avPrice.map((x) => (isFinite(x) && x) || undefined);
  console.log(avPrice);
  // let newAvPrice = sheetOut.getRange(70, 11, 1, 52).setValues([avPrice]);//вынос в sales 70 строка

  // Logger.log(avPrice);
  sheetGet.getRange('C6:6').setValues([avPrice]);
}
