/* exported CUSTOM_FORMULA_CALC_FIELD */
/**
 *
 * @param {any[][]} data
 * @returns
 */
function CUSTOM_FORMULA_CALC_FIELD(data) {
  try {
    const rows = [];
    const columns = [];
    const columnsIndex = [];
    const pivot = data.slice(1).reduce((acc, row) => {
      const [quartal, issueType, project] = row;
      if (!acc[project]) {
        rows.push(project);
        acc[project] = { count: 0 };
      }

      if (!acc[project][quartal]) acc[project][quartal] = { count: 0 };
      if (!acc[project][quartal][issueType]) {
        const index = [project, quartal, issueType].join('|');
        if (columnsIndex.indexOf(index) === -1) {
          columnsIndex.push(index);
          columns.push([project, quartal, issueType]);
        }
        acc[project][quartal][issueType] = {
          count: 0,
        };
      }
      acc[project].count += 1;
      acc[project][quartal].count += 1;
      acc[project][quartal][issueType].count += 1;
      return acc;
    }, {});

    // const columns = [...new Set(columns_)].sort();

    const out = rows.map((key) => {
      const data = pivot[key];
      let currP = undefined;
      const row = [];
      columnsIndex.forEach((keys) => {
        const [_, quartalKey, issueTypeKey] = keys.split('|');
        if (_ !== key) return;
        if (currP !== quartalKey) {
          currP = quartalKey;
          row.push((data?.[quartalKey]?.['Bug']?.count ?? 0) + '/' + (data?.[quartalKey]?.['Story']?.count ?? 0));
        }
        row.push(data?.[quartalKey]?.[issueTypeKey]?.count ?? '');
      });
      row.unshift(key);
      return row;
    });
    // out.unshift(['', ...columns]);
    // return [columns];
    return out;
    // return JSON.stringify(pivot, null, '  ');
  } catch (error) {
    return `${error.name}. ${error.message}. ${error.stack}`;
  }
}
