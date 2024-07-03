/* exported autoSave */
function autoSave() {
  var file = DriveApp.getFileById('14v1bwGbi34blY5Gtiqe1htxbG-1SJk9Vaa1C1SAMTiwI96pE4uW3hIHI');
  var folder = DriveApp.getFolderById('1cBhGCd_zJR02J6UV2Hkcrey6FdPeBQow');
  var name = SpreadsheetApp.getActive().getName();
  var currentDate = new Date();
  var date = Utilities.formatDate(currentDate, 'Europe/Moscow', 'dd.MM.yyyy');
  file.makeCopy(name, folder).setName(name + ' копия на ' + date);
  Logger.clear();
}
