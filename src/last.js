function lastAppear() {
  const data = SpreadsheetApp.openById('1vk66CLElJHAMh6nWTpkGQrzCBrRucZ4AcUu4PF3tIls')
    .getRange('Лист1!A2:B')
    .getValues();
  console.log(data.length);
  const { times, ids } = data.reduce(
    (acc, curr) => {
      const { time, id } = curr;
      if (!acc.times.includes(time)) {
        acc.times.push(time);
      }
      if (!acc.ids.includes(id)) {
        acc.ids.push(id);
      }
      return acc;
    },
    { times: [], ids: [] },
  );

  return ids.map((id) => [id]);
}
