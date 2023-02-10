function userActionIncrease() {
  changeValue_(0.5);
}

function userActionDecrease() {
  changeValue_(-0.5);
}

function changeValue_(difference) {
  const range = SpreadsheetApp.getActiveSheet().getRange('B6');
  range.setValue(Number(range.getValue()) + difference);
}
