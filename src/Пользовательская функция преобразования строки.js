const timeStrToNumber_ = (str) =>
  Number(
    str.replace(/(\d+):(\d+)/, function (_, m, p) {
      return Number(m) + Number(p) / 60;
    }),
  );

/* exported TIMESTR_TO_NUMBER */
/**
 *
 * @param {string[][] | string} data
 * @returns
 */
function TIMESTR_TO_NUMBER(data) {
  return Array.isArray(data[0]) ? data.map((item) => timeStrToNumber_(item[0])) : timeStrToNumber_(data);
}
