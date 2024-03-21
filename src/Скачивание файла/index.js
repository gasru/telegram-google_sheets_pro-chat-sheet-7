function getFile_(fileURL) {
  const response = UrlFetchApp.fetch(fileURL);
  const fileBlob = response.getBlob();
  const folder = DriveApp.getRootFolder();
  const result = folder.createFile(fileBlob);
  return result;
}

function userActionRunDowloadFile() {
  const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTs4lzQVposg0CeIrcEHWLzcsay1lW8gq0p4-c7x-51WL37n54TvzUwhwraSb-BdZNtCJ6GLYoYr4T1/pub?gid=1270070159&single=true&output=csv';
  const file = getFile_(url);
  console.log(file.getUrl());
}