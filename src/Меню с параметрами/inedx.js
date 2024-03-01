/**
 * @link https://ru.stackoverflow.com/q/1569625
 */

/**
 * @typedef {{
 *   caption: string,
 *   functionName: string
 * }} GSRU.DynamicMenu
 */

const DYNAMIC_MENU_CONFIG = [
  {
    caption: 'Пункт меню 1',
    functionName: 'dynamicMenuItem',
  },
  {
    caption: 'Пункт меню 2',
    functionName: 'dynamicMenuItem',
  },
  {
    caption: 'Пункт меню 3',
    functionName: 'dynamicMenuItem',
  },
];

/* exported getDynamicMenu_ */
/**
 *
 * @param {GoogleAppsScript.Base.Ui} ui
 * @param {string} name
 */
function getDynamicMenu_(ui, name) {
  var menu = ui.createMenu(name);

  configDynamicMenu_(menu, DYNAMIC_MENU_CONFIG);

  return menu;
}

/**
 * @param {GoogleAppsScript.Base.Menu} menu
 * @param {GSRU.DynamicMenu[]} config
 */
function configDynamicMenu_(menu, config) {
  config.forEach(function (item, i) {
    menu.addItem(item.caption, item.functionName + i);
  });
}

/* exported dynamicMenuItem */
function dynamicMenuItem(e) {
  var caption = e.item.caption;
  var order = e.order;
  Browser.msgBox(Utilities.formatString('Был нажат %sй пункт меню: %s', order + 1, caption));
}

(function (self) {
  DYNAMIC_MENU_CONFIG.forEach(function (item, i) {
    self[item.functionName + i] = function () {
      return self[item.functionName]({ item: item, order: i });
    };
  });
})(this);
