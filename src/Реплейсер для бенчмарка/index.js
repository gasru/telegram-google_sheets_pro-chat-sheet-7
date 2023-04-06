function REPLACER(range) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const sheetName = sheet.getName();
  return sheet
    .getRange(range)
    .getFormulas()
    .map((row) =>
      row.map((cell) => {
        if (/^=/.test(cell)) {
          return `=BENCHMARK(LAMBDA(${String(cell).slice(1)})) * 84600`
            .replace(/([\s{(;,*/&+-])+(\$*[a-z]*?\$*[\d]*:)/gi, `$1'${sheetName}'!$2`)
            .replace(/([\s{(;,*/&+-])+(\$*[a-z]+\$*[\d]*[});,*/&+-])/gi, `$1'${sheetName}'!$2`)
            .replace(/([\s{(;,*/&+-])+(\$*[a-z]+\$*[\d]*[});,*/&+-])/gi, `$1'${sheetName}'!$2`);
        } else return cell;
      }),
    );
}
