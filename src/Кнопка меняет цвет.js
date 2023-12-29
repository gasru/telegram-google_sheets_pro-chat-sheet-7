function userActionInitColorButtons() {
  const sheet = SpreadsheetApp.getActive();
  initImages_(sheet);
}

function userActionClickRED() {
  const sheet = SpreadsheetApp.getActive();
  switchColor_(sheet, 'userActionClickYELLOW');
}

function userActionClickYELLOW() {
  const sheet = SpreadsheetApp.getActive();
  switchColor_(sheet, 'userActionClickGREEN');
}

function userActionClickGREEN() {
  const sheet = SpreadsheetApp.getActive();
  switchColor_(sheet, 'userActionClickRED');
}

/**
 * @param {SpreadsheetApp.Sheet} sheet
 */
function switchColor_(sheet, cmd) {
  Object.entries(initImages_(sheet)).forEach(([key, image]) => {
    image.image.setAnchorCell(sheet.getRange('A1'));
    if (key === cmd) {
      image.image.setHeight(70).setWidth(70);
    } else {
      image.image.setHeight(1).setWidth(1);
    }
  });
}

function initImages_(sheet) {
  const state = {
    userActionClickRED: {
      source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Button_Icon_Red.svg/70px-Button_Icon_Red.svg.png',
      image: undefined
    },
    userActionClickYELLOW: {
      source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Button_Icon_Yellow.svg/70px-Button_Icon_Yellow.svg.png',
      image: undefined
    },
    userActionClickGREEN: {
      source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Button_Icon_Green.svg/70px-Button_Icon_Green.svg.png',
      image: undefined
    }
  }

  sheet.getImages().forEach(image => {
    const scriptName = image.getScript();
    if (state[scriptName]) {
      state[scriptName].image = image;
    }
  });

  console.log(state);

  Object.entries(state).forEach(([key, image]) => {
    if (!image.image) {
      const blob = UrlFetchApp.fetch(image.source).getBlob();
      const nImage = sheet.insertImage(blob, 1, 1, 1, 1);
      // image.replace(blob);
      console.log(key);
      nImage.setHeight(70).setWidth(70);
      nImage.assignScript(key);
      state[key].image = nImage;
    }
  });

  return state;
}