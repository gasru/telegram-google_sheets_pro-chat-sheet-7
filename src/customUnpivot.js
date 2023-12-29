/**
 * Перестраивает горизонтальную таблицу в нормальный вид =)
 * @param {Array<any>} baserange основные данные, для которых нужно повторить признаки
 * @param {[number|string]} attributesRange диапазон с признаками
 * @return {[number|string]}
 * @customfunction
 */
function FLAT_ME_PLS(baserange, attributesRange, attrName) {
  if (baserange.length != attributesRange.length) {
    const err = new Error('Переданы диапазоны разного размера.');
    err.name = 'BadSizeError';
    throw err;
  }
  const [headers, ...baseRows] = baserange;
  const [skillNames, ...attributes] = attributesRange;
  const skillName = attrName || skillNames[0];
  const resultRange = [headers.concat(skillName)];
  attributes.forEach((attrRow, i) => {
    for (attr of attrRow) {
      if (!attr) continue;
      resultRange.push(baseRows[i].concat(attr));
    }
  });
  return resultRange;
}
