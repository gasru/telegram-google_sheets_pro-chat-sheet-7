function myFunction333() {
  const h = UrlFetchApp.fetch('https://smart-lab.ru/cgi-bin/gcn.fcgi?list=1083556&func=func8422&_=1731928577852', {
    contentType: 'text/javascript',
  });
  // const data = h.getBlob();
  console.log(h.getBlob().getDataAsString());
}
