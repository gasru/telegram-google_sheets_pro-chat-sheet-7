var PRINT_OPTIONS = {
  size: 7, // paper size. 0=letter, 1=tabloid, 2=Legal, 3=statement, 4=executive, 5=folio, 6=A3, 7=A4, 8=A5, 9=B4, 10=B
  fzr: false, // repeat row headers
  portrait: true, // false=landscape
  fitw: true, // fit window or actual size
  gridlines: false, // show gridlines
  printtitle: false,
  sheetnames: false,
  pagenum: 'UNDEFINED', // CENTER = show page numbers / UNDEFINED = do not show
  attachment: false,
};

var PDF_OPTS = objectToQueryString(PRINT_OPTIONS);

function onOpen_(e) {
  SpreadsheetApp.getUi().createMenu('Print...').addItem('Print selected range', 'printSelectedRange').addToUi();
}

function printSelectedRange() {
  SpreadsheetApp.flush();
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var range = sheet.getActiveRange();

  var gid = sheet.getSheetId();
  var printRange = objectToQueryString({
    c1: range.getColumn() - 1,
    r1: range.getRow() - 1,
    c2: range.getColumn() + range.getWidth() - 1,
    r2: range.getRow() + range.getHeight() - 1,
  });
  var url =
    ss.getUrl().replace(/edit$/, '') +
    'export?format=pdf' +
    PDF_OPTS +
    printRange +
    '&embedded=false' +
    '&scale=2' +
    '&top_margin=0.0' +
    '&bottom_margin=0.0' +
    '&left_margin=0.0' +
    '&right_margin=0.0' +
    '&horizontal_alignment=CENTER' +
    '&vertical_alignment=MIDDLE' +
    '&gid=' +
    gid;

  var htmlTemplate = HtmlService.createTemplateFromFile('js');
  htmlTemplate.url = url;
  SpreadsheetApp.getUi().showModalDialog(htmlTemplate.evaluate().setHeight(10).setWidth(100), 'Print range');
}

function objectToQueryString(obj) {
  return Object.keys(obj)
    .map(function (key) {
      return Utilities.formatString('&%s=%s', key, obj[key]);
    })
    .join('');
}
