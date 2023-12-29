function SAVEKEYS(value){
  return CHATLIB.SAVEKEYS(value);
}

function _(){
  const folder = DriveApp.getFileById('FOLDER_ID');
  const file = DriveApp.getFileById('FILE_ID');
  folder.addFile(file);
}